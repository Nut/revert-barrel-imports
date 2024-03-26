import * as ts from "typescript";

const program = ts.createProgram(
  ["../test-files/components/test.component.tsx"],
  {
    noEmitOnError: true,
    noImplicitAny: true,
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.React,
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: true,
  }
);

const sourceFile = program.getSourceFile(
  "../test-files/components/test.component.tsx"
);

if (sourceFile) {
  sourceFile.statements.forEach((statement) => {
    if (ts.isImportDeclaration(statement)) {
      const ic = statement.importClause;
      if (ic && ts.isImportClause(ic)) {
        const nb = ic.namedBindings;
        if (nb && ts.isNamedImportBindings(nb)) {
          nb.forEachChild((c) => {
            console.log(c);
          });
        }
      }
    }
  });
}
