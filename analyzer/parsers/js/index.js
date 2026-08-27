const Parser = require("node-tree-sitter");
const path = require("path");

const jsPath = path.join(__dirname, "../grammars/javascript.so");
const JavaScript = Parser.Language.load(jsPath);

const parser = new Parser();
parser.setLanguage(JavaScript);

function parseJS(source) {
  return parser.parse(source);
}

module.exports = { parseJS };
