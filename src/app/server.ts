import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import usersRouter from "../routes/users.route.ts";
import todosRouter from "../routes/todos.route.ts";
const app = new Application();

app.use(usersRouter.routes());
app.use(todosRouter.routes());

const runServer = () => app.listen({ port: 8080 });

export default runServer;
