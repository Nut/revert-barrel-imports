import generate from "@babel/generator";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import {
  identifier,
  importDeclaration,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  importSpecifier,
  stringLiteral,
} from "@babel/types";
import * as fs from "fs";

const { importDeclarationVisitor } = require("./plugin/barrel");

const input = fs.readFileSync(
  "./../test-files/components/test.component.tsx",
  "utf8"
);

function transform(code: string): string {
  const ast = parse(code, {
    plugins: ["typescript", "jsx"],
    sourceType: "module",
  });

  traverse(ast, {
    ImportDeclaration(path, state) {
      // @ts-ignore
      if (path.node.__processed) return;

      importDeclarationVisitor(path, {
        filename: "./../test-files/components/test.component.tsx",
      });

      // path.replaceWithMultiple(
      //   path.node.specifiers.map((specifier) =>
      //     toDirectImport(path.node, specifier)
      //   )
      // );
    },
  });

  return generate(ast).code;
}

function toDirectImport(
  node: ImportDeclaration,
  specifier: ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier
): ImportDeclaration {
  if (!node.source.value.match(/\.\.\//)) {
    return node;
  }

  const sp = importSpecifier(identifier("lol"), identifier("bla"));
  const source = stringLiteral("../haha");
  const declaration = importDeclaration([specifier], source);
  // @ts-ignore
  declaration.__processed = true;
  return declaration;
}

const output = transform(input);

console.log(output);
