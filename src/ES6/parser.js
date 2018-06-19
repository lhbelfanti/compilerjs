/**
 * The parser is responsible for turing the list of tokens
 * into an AST or Abstract Syntax Tree.</br>
 * Usually, the parser is implemented base on a grammar.</br>
 * Here’s the grammar of our language:<br>
 * <pre>
 * digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
 * num = digit+
 * op = sum | sub | mul | div
 * expr = num | op expr+
 * </pre>
 *  Visually, the parsing is a process which turns the array:</br>
 * <pre>
 * const tokens = ["sub", "2", "sum", "1", "3", "4"];
 * </pre>
 * to the following tree:
 * <pre>
 *    sub
 *    / \
 *   2  sum
 *      /|\
 *     1 3 4
 * </pre>
 * <hr/>
 * <br/>
 *
 * 
 * @param {String} operation The operation node symbol.
 * @param {String} number The number node symbol.
 */
class Parser 
{
  constructor() {
    this.Op = Symbol('op');
    this.Num = Symbol('num');
  }

  /**
   * Define c variable to reference the node being processed 
   * and call parseExpr.
   * 
   * @param  {String} tokens The array of tokens given by the lexer.
   * @return {Object} An AST.
   */
  parse(tokens) {
    this.tokens = tokens;
    this.c = 0;
    return this.parseExpr();
  }

  /**
   * Returns the element of tokens associated with the current 
   * value of the c local variable.
   *
   * @return {String}
   */
  peek() {
      return this.tokens[this.c];
  }

  /**
   * Returns the element of tokens associated with the current 
   * value of the c local variable and increments c.
   * 
   * @return {String}
   */
  consume() {
      return this.tokens[this.c++];
  }

  /**
   * Gets the current token (i.e. invokes peek()), parses it to a 
   * natural number and returns a new number token.
   * 
   * @return {Object} A number node.
   */
  parseNum() {
      return { val: parseInt(this.consume()), type: this.Num };
  }

  /**
   * Since parseOp has been invoked by parseExpr when the value of peek() 
   * is not a number we know that it is an operator so we create a new operation node.
   * In the node declaration we set the list of “sub-expressions” to 
   * be the empty list (i.e. []), the operation name to the value of peek() 
   * and the type of the node to Op. Later, while we don’t reach the end of 
   * the program, we loop over all tokens by pushing the currently parsed expression 
   * to the list of “sub-expressions` of the given node. Finally, we return the node.
   * 
   * @return {Object} An operation node.
   */
  parseOp() {
    var node = { val: this.consume(), type: this.Op, expr: [] };
    while (this.peek()) {
      node.expr.push(this.parseExpr());
    }
    return node;
  }

  /**
   * Checks if the current token matches the regular expression /\d/ 
   * (i.e. is a number) and invokes parseNum if the match was successful, 
   * otherwise returns parseOp.
   * 
   * @return {String}
   */
  parseExpr() {
    return (/\d/.test(this.peek()) ? this.parseNum() : this.parseOp());
  }
}

exports.default = Parser;