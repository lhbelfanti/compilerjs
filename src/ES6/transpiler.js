/**
 * Instead of interpreting the AST, we can translate it to 
 * another language. Here's how we can do that with JavaScript.
 * 
 * @param {String} operation The operation node symbol.
 * @param {String} number The number node symbol.
 */

class Transpiler 
{
	constructor() {
		this.Op = Symbol('op');
		this.Num = Symbol('num');
		this.opMap = { sum: '+', mul: '*', sub: '-', div: '/' };
	}

  	/**
  	 * Get the number node transpiled.
  	 * 
  	 * @param  {Object} ast The AST.
  	 * @return {String} Number node transpiled.
  	 */
  	transpileNum(ast) {
    	return ast.val;
  	}

  	/**
  	 * Get the operation node transpiled.
  	 * 
  	 * @param  {Object} ast The AST.
  	 * @return {String} Operation node transpiled.
  	 */
  	transpileOp(ast) {
  		console.log(ast.expr);
  		console.log(this.opMap[ast.val]);
  		if (ast.expr != undefined)
  		return `(${ast.expr.map(this.transpileNode, this).join(' ' + this.opMap[ast.val] + ' ')})`;//'(' + ast.expr.map(this.transpile).join(' ' + this.opMap[ast.val] + ' ') + ')';
  	}

	/**
	 * Get the node transpiled.
	 * 
	 * @param  {Object} ast The AST.
	 * @return {String} Node transpiled.
	 */
	transpileNode(ast) {
    	return ast.type === this.Num ? this.transpileNum(ast) : this.transpileOp(ast);
  	}

	/**
	 * Transpile the AST to JavaScript code.
	 * 
	 * @param  {Object} ast The AST.
	 * @return {String} JavaScript code.
	 */
	transpile(ast) {
		return this.transpileNode(ast);
	}
}

exports.default = Transpiler;