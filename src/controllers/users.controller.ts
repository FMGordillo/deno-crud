import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { db } from "../app/db.ts";

const getUsers = (ctx: Context) => {
  try {
    const query = `SELECT * FROM users`;
    const users = db.query(query);
    ctx.response.body = { users };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
      details: error.message,
    };
  }
};

export { getUsers };
