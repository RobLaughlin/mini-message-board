import shell from "shelljs";
// Copy all the view templates and assets in the public folder
shell.cp("-R", ["src/views", "src/public"], "dist/");

// Remove unnecessary files
shell.rm(["dist/**/*.ts"]);
