import fs from "fs";
import path from "path";
import { parseTS } from "./parsers/ts";
import { parseJS } from "./parsers/js";

export interface StructureNode {
  file: string;
  functions: string[];
  imports: string[];
  exports: string[];
}

function getParser(extension: string) {
  switch (extension) {
    case ".ts":
    case ".tsx":
      return parseTS;
    case ".js":
    case ".jsx":
      return parseJS;
    default:
      return null;
  }
}

export function analyzeStructure(filePath: string): StructureNode | null {
  const extension = path.extname(filePath);
  const parser = getParser(extension);

  if (!parser) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const tree = parser(source);

  const functions: string[] = [];
  const imports: string[] = [];
  const exports: string[] = [];

  // Function declarations
  tree.rootNode.descendantsOfType("function_declaration").forEach(node => {
    const name = node.childForFieldName("name");
    if (name) functions.push(name.text);
  });

  // Import statements
  tree.rootNode.descendantsOfType("import_statement").forEach(node => {
    imports.push(node.text);
  });

  // Export statements
  tree.rootNode.descendantsOfType("export_statement").forEach(node => {
    exports.push(node.text);
  });

  return {
    file: filePath,
    functions,
    imports,
    exports
  };
}
