const fs = require("fs");
const Vue = require("vue");
const VConfirm = require("@gn5r/vue-confirm");
const shell = require("shelljs");

if (VConfirm === undefined) throw new Error("VConfirm is undefined");

Vue.component("v-confirm", VConfirm);

const hyphenateRE = /\B([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
}

function parseFunctionParams(func) {
  const groups = /function\s_.*\((.*)\)\s\{.*/i.exec(func);
  if (groups && groups.length > 1) return `(${groups[1]}) => {}`;
  else return "null";
}

function getPropType(type) {
  if (Array.isArray(type)) {
    return type.map((t) => getPropType(t));
  }

  if (!type) return "any";

  return type.name.toLowerCase();
}

function getPropDefault(def, type) {
  if (
    def === "" ||
    (def == null && type !== "boolean" && type !== "function")
  ) {
    return "undefined";
  } else if (typeof def === "function" && type !== "function") {
    def = def.call({});
  }

  if (type === "boolean") {
    return def ? "true" : "false";
  }

  if (type === "string") {
    return def ? `'${def}'` : def;
  }

  if (type === "function") {
    return parseFunctionParams(def);
  }

  return def;
}

function genProp(name, prop) {
  const type = getPropType(prop.type);

  return {
    name,
    type,
    description: prop.description || "",
    default: getPropDefault(prop.default, type),
  };
}

function parseComponent(component) {
  return {
    props: parseProps(component),
    description: "",
  };
}

function parseProps(component, array = []) {
  const options = component.options;
  const props = options.props || {};

  Object.keys(props).forEach((key) => {
    const generated = genProp(key, props[key], component.name);
    array.push(generated);
  });

  return array.sort((a, b) => a.name > b.name);
}

function writeJsonFile(obj, file) {
  return fs.promises.writeFile(file, JSON.stringify(obj, null, 2));
}

const components = {};

const installedComponents = Vue.options.components;

const componentNameRegex = /^v-confirm/;

for (const name in installedComponents) {
  if (!componentNameRegex.test(name)) continue;

  const component = installedComponents[name];

  const kebabName = hyphenate(name);
  const options = parseComponent(component.options.default);

  components[kebabName] = options;
}

const tags = Object.keys(components).reduce((t, k) => {
  t[k] = {
    attributes: components[k].props
      .map((p) => p.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`))
      .sort(),
    description: components[k].description,
  };

  return t;
}, {});

const attributes = Object.keys(components).reduce((attrs, k) => {
  const tmp = components[k].props.reduce((a, prop) => {
    let type = prop.type;

    if (!type) type = "";
    else if (Array.isArray(type)) {
      type = type.map((t) => t.toLowerCase()).join("|");
    } else type = type.toLowerCase();

    const name = prop.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);

    a[`${k}/${name}`] = {
      type,
      description: prop.description,
    };

    return a;
  }, {});

  return Object.assign(attrs, tmp);
}, {});

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", 0o755);
}

Promise.all([
  writeJsonFile(tags, "dist/tags.json"),
  writeJsonFile(attributes, "dist/attributes.json"),
]).then(() => {
  console.log("generated json file to dist");
  if (shell.exec("ls ./dist/*.json").code === 0) {
    shell.cp("./dist/tags.json", "../v-confirm/dist");
    shell.cp("./dist/attributes.json", "../v-confirm/dist");
    shell.exec("ls ../v-confirm/dist");
    console.debug(
      "[vetur-helper-json:] generated tags.json and attributes.json"
    );
  }
});
