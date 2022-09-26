import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { db } from "../app/db.ts";

const getUsers = (ctx: Context) => {
  try {
    const query = `SELECT * FROM users`;
    const users = db.queryEntries(query);
    ctx.response.body = { users };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
      details: error.message,
    };
  }
};

const createUser = async (ctx: Context) => {
  try {
    const body = ctx.request.body();
    const { name, email } = await body.value;

    if (!name || !email) {
      ctx.response.status = 400;
      ctx.response.body = {
        message: "Bad request",
        details: "Missing required fields",
      };
    }

    const query = "INSERT INTO users (name) VALUES (:name)";
    const user = db.queryEntries(query, {
      name,
    });
    ctx.response.status = 201;
    ctx.response.body = {
      message: "User created successfully",
      user,
    };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
      details: error.message,
    };
  }
};

export { createUser, getUsers };
