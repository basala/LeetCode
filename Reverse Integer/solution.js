var reverse = function() {
    var sum = 0;
    while (0 != x) {
        sum = (x % 10) + (sum * 10);
        x = parseInt(x / 10);
    }
    if (sum > 2147483647 || sum < -2147483648) {
        sum = 0;
    }
    return sum;
}