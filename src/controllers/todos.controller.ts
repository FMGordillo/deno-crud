import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { db } from "../app/db.ts";

const getTodos = (ctx: Context) => {
  try {
    const query = `SELECT * FROM todos`;
    const todos = db.queryEntries(query);
    ctx.response.body = { todos };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
      details: error.message,
    };
  }
};

const createTodo = async (ctx: Context) => {
  try {
    const body = ctx.request.body();
    const { title, description, status, user_id } = await body.value;

    if (!title || !description || !status || !user_id) {
      ctx.response.status = 400;
      ctx.response.body = {
        message: "Bad request",
        details: "Missing required fields",
      };
    }

    const query =
      `INSERT INTO todos (title, description, status, user_id) VALUES (:title, :description, :status, :user_id)`;
    const todo = db.queryEntries(query, {
      title,
      description,
      status,
      user_id,
    });
    ctx.response.status = 201;
    ctx.response.body = { todo };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
      details: error.message,
    };
  }
};

const getUnfinishedTodos = (ctx: Context) => {
  try {
    const queryParams = ctx.request.url.searchParams;
    if (queryParams.has("user_id")) {
      const query =
        `SELECT * FROM todos WHERE status != 'completed' AND user_id = :user_id`;
      const todos = db.queryEntries(query, {
        user_id: 0,
      });
      ctx.response.body = { todos };
    } else {
      ctx.response.status = 400;
      ctx.response.body = {
        message: "Bad request",
        details: "No user_id provided in query parameter",
      };
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: "Internal server error",
      details: error.message,
    };
  }
};

export { createTodo, getTodos, getUnfinishedTodos };
