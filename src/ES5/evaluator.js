/**
 * <hr/>
 *
 * In it we simply visit each node from the tree with pre-order traversal and either:</br>
 * - Return the corresponding value, in case the node is of type number.</br>
 * - Perform the corresponding arithmetic operation, in case of an operation node.</br>
 *
 * <hr/>
 */
function Evaluator()
{
    this.Op = 'op';
    this.Num = 'num';
}

/**
 * Evaluate the expression and return the result.
 *
 * @param {Object} ast The AST.
 * @returns {String} The result.
*/
Evaluator.prototype.evaluate = function (ast)
{
    if (ast.type === this.Num)
        return ast.val;
    return this.doOperation(ast);
};

/**
 * Resolve the operation and returns the result.
 *
 * @param {Object} ast The AST.
 */
Evaluator.prototype.doOperation = function(ast)
{
    let opAcMap = {
        sum: function sum(args) {
            return args.reduce(function (a, b) {
                b = b ? b : 0;
                return a + b;
            }, 0);
        },
        sub: function sub(args) {
            return args.reduce(function (a, b) {
                b = b ? b : 0;
                return a - b;
            });
        },
        div: function div(args) {
            return args.reduce(function (a, b) {
                b = b ? b : 1;
                return a / b;
            });
        },
        mul: function mul(args) {
            return args.reduce(function (a, b) {
                b = b ? b : 1;
                return a * b;
            }, 1);
        }
    };

    return opAcMap[ast.val](ast.expr.map(this.evaluate, this));
};

exports.default = Evaluator;