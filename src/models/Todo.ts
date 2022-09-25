type TodoStatus = "pending" | "completed";
type Todo = {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  user_id: number;
};

const createTodoTable = `
    CREATE TABLE IF NOT EXISTS todo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        status TEXT NOT NULL,
        user_id INTEGER NOT NULL REFERENCES users(id)
    )
`;

export type { Todo, TodoStatus };
export { createTodoTable };
