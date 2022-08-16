import { basename } from "node:path";
import compat from "core-js-compat";

const modules = ["core-js/es"];
const exclude = ["es.typed-array"];
const targets = {
  edge: "88",
  firefox: "78",
  chrome: "87",
  safari: "13",
};
const { list, targets: requiredTargetsByModule } = compat({
  modules,
  exclude,
  targets,
});

console.log("/*");
console.log(`generated by ${basename(new URL("", import.meta.url).pathname)}`);
console.log();
console.log("modules:");
console.log(JSON.stringify(modules));
console.log();
console.log("exclude:");
console.log(JSON.stringify(exclude));
console.log();
console.log("targets:");
console.log(JSON.stringify(targets, null, 2));
console.log("*/");
console.log();

list.sort();
for (const module of list) {
  console.log(`import '${`core-js/modules/${module}.js`}'`);
  console.log("/*");
  console.log(`${JSON.stringify(requiredTargetsByModule[module], null, 2)}`);
  console.log("*/");
  console.log();
}
