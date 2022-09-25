type User = {
  id: number;
  name: string;
};

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )
`;

export type { User };
export { createUsersTable };
