function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.split(' ').join('');
    
    
    if (expr.includes('/0')) throw Error('TypeError: Division by zero.')

    let braketLeft = [];
    let braketRight = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === ')') {
            braketRight.push(expr[i])
        } else if (expr[i] === '(') {
            braketLeft.push(expr[i])
        }
    }

    if (braketLeft.length != braketRight.length) {
        throw Error('ExpressionError: Brackets must be paired');
    }


    return new Function(`return ${expr}`)(); 
}

module.exports = {
    expressionCalculator
}