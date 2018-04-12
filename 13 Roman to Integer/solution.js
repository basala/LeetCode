/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'I':
                sum += ((arr.slice(i + 1).indexOf('V') == -1) && (arr.slice(i + 1).indexOf('X') == -1)) ? 1 : -1;
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                sum += ((arr.slice(i + 1).indexOf('L') == -1) && (arr.slice(i + 1).indexOf('C') == -1)) ? 10 : -10;
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                sum += ((arr.slice(i + 1).indexOf('D') == -1) && (arr.slice(i + 1).indexOf('M') == -1)) ? 100 : -100;
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
        }
    }
    return sum;
}