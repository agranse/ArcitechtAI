const Parser = require("node-tree-sitter");
const path = require("path");

const tsPath = path.join(__dirname, "../grammars/typescript.so");
const TypeScript = Parser.Language.load(tsPath);

const parser = new Parser();
parser.setLanguage(TypeScript);

function parseTS(source: any) {
  return parser.parse(source);
}

module.exports = { parseTS };
