import { Router } from "https://deno.land/x/oak@v11.1.0/router.ts";
import { getUsers } from "../controllers/users.controller.ts";

const router = new Router();

router.get("/users", getUsers);

export default router;
