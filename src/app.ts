import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);
// console.log(yarg);

(async() => {
  await main();
})();

async function main() {

  const {
    b:base,
    l:limit,
    s:showTable,
    n:fileName,
    d:fileDestination
  } = yarg;

  // console.log({ base, limit, showTable, name, destination });

  ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}