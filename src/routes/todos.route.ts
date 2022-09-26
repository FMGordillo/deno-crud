import { Router } from "https://deno.land/x/oak@v11.1.0/router.ts";
import {
  createTodo,
  getTodos,
  getUnfinishedTodos,
} from "../controllers/todos.controller.ts";

const router = new Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.get("/todos/unfinished", getUnfinishedTodos);

export default router;
