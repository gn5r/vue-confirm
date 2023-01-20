export function kebabCase(str: string) {
  return str
    .split("")
    .map((s, i) =>
      s.toUpperCase() === s ? `${i > 0 ? "-" : ""}${s.toLowerCase()}` : s
    )
    .join("");
}

function getPropType(type: any | any[]): string {
  if (Array.isArray(type)) {
    return type.flatMap((t) => getPropType(t)).join("|");
  }
  if (!type) return "any";
  return type.name.toLowerCase();
}

function parseFunctionParams(func: string) {
  const [, regular] = /function\s_.*\((.*)\)\s\{.*/i.exec(func) || [];
  const [, arrow] = /\((.*)\)\s=>\s\{.*/i.exec(func) || [];
  const param = regular || arrow;

  return param ? `(${param}) => {}` : undefined;
}

function getPropDefault(def: any, type: string | string[]) {
  if (typeof def === "function" && type !== "function") {
    return def.call({}, {});
  }

  if (type === "string") {
    return def ? `'${def}'` : def;
  }

  if (type === "function") {
    return parseFunctionParams(def);
  }

  if (
    def == null &&
    (type === "boolean" || (Array.isArray(type) && type.includes("boolean")))
  ) {
    return false;
  }

  return def;
}

function genProp(name: string, prop: any): Props {
  let type = "any";
  if (typeof prop === "function") {
    type = prop.name.toLowerCase();
  } else {
    type = getPropType(prop?.type);
  }
  return {
    name,
    type,
    default: getPropDefault(prop?.default, type),
    description: prop?.description,
  };
}

export function parseProps(props: any): Props[] {
  const array = Object.keys(props).map((k) => genProp(k, props[k]));
  return array.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

type Props = {
  name: string;
  type: string;
  default: any;
  description?: string;
};
