var reverse = function(x) {
    let ret = 0;
    while (x) {
        ret = ret * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if ((ret | 0) === ret) {
        return ret;
    } else {
        return 0;
    }
}