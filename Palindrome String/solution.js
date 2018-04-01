function palindrome_str(arr) {
    var res = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('').reverse().join('');
        // console.log(temp);
        if (arr[i] == temp && obj[arr[i]] != undefined) {
            res.push([arr[i], arr[i]]);
            delete obj[arr[i]];
        } else if (obj[temp] != undefined) {
            res.push([arr[i], temp]);
            delete obj[temp];
        } else {
            obj[arr[i]] = i;
        }
    }
    return res;
}

// test
var res = palindrome_str(['aba', 'aba', 'aba', 'abc', 'cba'])
console.log(res);