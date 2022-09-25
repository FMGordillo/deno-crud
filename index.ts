import { closeDb, initializeDb } from "./src/app/db.ts";
import runServer from "./src/app/server.ts";

globalThis.addEventListener("load", async () => {
  initializeDb();
  await runServer();
  console.log("server running");
});
globalThis.addEventListener("beforeunload", () => {
  closeDb();
});
