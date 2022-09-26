import { Router } from "https://deno.land/x/oak@v11.1.0/router.ts";
import { getTodos } from "../controllers/todos.controller.ts";

const router = new Router();

router.get("/todos", getTodos);

export default router;
