/**
 * <hr/>
 *
 * The lexer is responsible for turning the input string into a list of tokens.</br>
 * </br>
 * For instance, the lexer will turn the following expression:
 * <pre>
 * sum 5 sub 2 mul 3 1 sum 4
 * </pre>
 * To the following array:
 * <pre>
 * ["sum", "5", "sub", "2", "mul", "3", "1", "sum", "4"]
 * </pre>
 *
 * <hr/>
 */

function Lexer()
{

}

/**
 * Generate all the tokens of the grammar.</br>
 * The grammar string is splitted by a single space. Then the produced 
 * substrings are mapped to their trimmed version and the empty
 * strings are filtered.
 * 
 * @param {String} grammar The grammar to be processed.
 * @returns {Array} an array of tokens.
 */

Lexer.prototype.lex = function(grammar) 
{
	return grammar.split(' ').map(function (s) {
    	return s.trim();
	}).filter(function (s) {
		return s.length;
	});
};

exports.default = Lexer;