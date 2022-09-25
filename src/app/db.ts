import { DB } from "https://deno.land/x/sqlite@v3.5.0/mod.ts";
import { createTodoTable } from "../models/Todo.ts";
import { createUsersTable } from "../models/User.ts";

const db = new DB("test.sqlite");

const initializeDb = () => {
  db.query(createUsersTable);
  db.query(createTodoTable);
};

const closeDb = () => {
  db.close();
};

export { closeDb, db, initializeDb };
