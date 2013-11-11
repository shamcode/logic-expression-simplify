/**
 * Main function for simplify logic expression
 * @param expression
 */
simplify = function (expression) {
    var result = '', // Result for calculation expression
        value = [false, true],
        expressionInLowerCase = expression.toLowerCase(),
        localResult;

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            localResult = eval(expressionInLowerCase.replace(/a(?!lse)/g, value[i]).replace(/b/g, value[j]));
            result += !!localResult ? '1' : '0';
        }
    }

    return {
        '0000': 'false',
        '0001': 'a && b',
        '0010': 'a && !b',
        '0011': 'a',
        '0100': '!a && b',
        '0101': 'b',
        '0110': 'a != b',
        '0111': 'a || b',
        '1000': '!(a && b)',
        '1001': 'a == b',
        '1010': '!b',
        '1011': 'a || !b',
        '1100': '!a',
        '1101': '!a || b',
        '1110': '!(a && b)',
        '1111': 'true'
    }[result];
};