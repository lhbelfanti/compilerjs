/**
 * <hr/>
 *
 * Instead of interpreting the AST, we can translate it to 
 * another language. Here's how we can do that with JavaScript.
 *
 * <hr/>
 */

function Transpiler()
{
	this.Op = 'op';
	this.Num = 'num';
	this.opMap = { sum: '+', mul: '*', sub: '-', div: '/' };
}

/**
 * Get the number node transpiled.
 * 
 * @param  {Object} ast The AST.
 * @return {String} Number node transpiled.
 */
Transpiler.prototype.transpileNum = function(ast) 
{
	return ast.val;
};

/**
 * Get the operation node transpiled.
 * 
 * @param  {Object} ast The AST.
 * @return {String} Operation node transpiled.
 */
Transpiler.prototype.transpileOp = function(ast) 
{
	if (ast.expr != undefined)
		return '(' + ast.expr.map(this.transpile, this).join(' ' + this.opMap[ast.val] + ' ') + ')';
	else
		return ast.val;
};

/**
 * Get the node transpiled.
 * 
 * @param  {Object} ast The AST.
 * @return {String} Node transpiled.
 */
Transpiler.prototype.transpileNode = function(ast) 
{
	return ast.type === this.Num ? this.transpileNum(ast) : this.transpileOp(ast);
};

/**
 * Transpile the AST to JavaScript code.
 * 
 * @param  {Object} ast The AST.
 * @return {String} JavaScript code.
 */
Transpiler.prototype.transpile = function(ast) 
{
	return this.transpileNode(ast);
};

exports.default = Transpiler;