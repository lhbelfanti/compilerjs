const Lexer = require('./lexer');
const Parser = require('./parser');
const Transpiler = require('./transpiler');
const Evaluator = require('./evaluator');

const lexer = new Lexer.default();
const parser = new Parser.default();
const transpiler = new Transpiler.default();
const evaluator = new Evaluator.default();


let executeCompiler = function(code)
{
    let codeParsed = parser.parse(lexer.lex(code));
    console.log("TEST " + ++executeCompiler.counter);
    console.log("Operations:");
    console.log(code);
    console.log(transpiler.transpile(codeParsed));
    console.log("Result:");
    console.log(evaluator.evaluate(codeParsed));
    console.log("");
};

executeCompiler.counter = 0;

executeCompiler("mul 3 sub 2 sum 1 3 4");
executeCompiler("mul 10 sum 5 4");
executeCompiler("sub 2 mul 10 sum 3 5 div 8 sub 10 2");
executeCompiler("div 30 sub 7 4 ");
executeCompiler("mul 5 8 sub 20 sum 9 8 3");
executeCompiler("sum 9 sub 5 mul 5 div 8 4 2");