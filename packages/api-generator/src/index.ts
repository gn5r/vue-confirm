import VConfirm from "@gn5r/vue-confirm";
import { parseProps, kebabCase } from "./utils";
import { existsSync, mkdirSync, promises } from "fs";
import { cp, exec } from "shelljs";

function writeJsonFile(obj: any, file: string) {
  console.debug(`writing json file to ${file}`);
  return promises.writeFile(file, JSON.stringify(obj, null, 2));
}

function run() {
  const componentData = {
    props: parseProps((VConfirm as any).props),
    name: (VConfirm as any).name,
  };

  const tags = {
    [componentData.name]: {
      attributes: componentData.props
        .map((prop) => kebabCase(prop.name))
        .sort(),
      description: "",
    },
  };

  const attributes = componentData.props.reduce((obj, prop) => {
    return {
      ...obj,
      [`${componentData.name}/${kebabCase(prop.name)}`]: {
        type: prop.type,
        description: prop.description || "",
      },
    };
  }, {});

  if (!existsSync("dist")) mkdirSync("dist", 0o755);

  Promise.all([
    writeJsonFile(tags, "dist/tags.json"),
    writeJsonFile(attributes, "dist/attributes.json"),
  ]).then(() => {
    if (exec("ls dist/*.json").code === 0) {
      console.debug("generated helper json");
      cp("dist/tags.json", "../v-confirm/dist");
      cp("dist/attributes.json", "../v-confirm/dist");
      if (exec("ls ../v-confirm/dist").code === 0) {
        console.debug(
          "[api-generator] generated tags.json and attributes.json"
        );
      }
    }
  });
}

run();
