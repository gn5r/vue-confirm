const lernaJson = require("../lerna.json");
const version = lernaJson.version;

if (version.match(/beta/)) {
  console.log("beta");
} else if (version.match(/next/)) {
  console.log("next");
} else if (version.startsWith("3.")) {
  console.log("stable");
} else {
  console.log("latest");
}
