import { describe, it } from "https://deno.land/std@0.157.0/testing/bdd.ts";
import { Importer } from "https://deno.land/x/fake_imports@v0.6.1/mod.js";
// import { testing } from "https://deno.land/x/oak@v11.1.0/mod.ts";
// import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
// import usersRoute from './users.route.ts';

const importer = new Importer(import.meta.url);
importer.fakeModule(
  "https://deno.land/x/sqlite@v3.5.0/mod.ts",
  `export class {
  query() {
      return [{ id: 1, name: "John" }];
  };
};`,
);

describe("Users Controller", () => {
  it("should return a list of users", async () => {
    // const ctx = testing.createMockContext({
    //   path: "/users",
    // });
    // const next = testing.createMockNext();
    // const middleware = usersRoute.routes();
    // await middleware(ctx, next);
    // assertEquals(ctx.response.body, { users: [{ id: 1, name: "John" }] });
  });
});
