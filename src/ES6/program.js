const Lexer = require('./lexer');
const Parser = require('./parser');
const Transpiler = require('./transpiler');

const program = "mul 3 sub 2 sum 1 3 4";

const lexer = new Lexer.default();
const parser = new Parser.default();
const transpiler = new Transpiler.default();

console.log(transpiler.transpile(parser.parse(lexer.lex(program))));
