#: Show this help
help:
	@cat $(MAKEFILE_LIST) | deno run -q https://deno.land/x/makehelp/help.ts

#: Run the server
run:
	deno run --allow-net --allow-read --allow-write ./index.ts

#: Run the server in debug mode
debug:
	deno run --inspect --allow-net --allow-read --allow-write ./index.ts

#: Format the code
format:
	deno fmt

#: Run the tests
test:
	deno test --coverage=cov_profile

#: Run the linter
lint:
	deno lint