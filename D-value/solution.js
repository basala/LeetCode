/**
 * @param {number} k
 * @param {array} arr
 * @return {number} count
 */
var count = function(arr, k) {
    let carr = [...new Set(arr)]; // delete the repeat number
    let res = {};
    let sum = 0;
    for (let i = 0; i < carr.length; i++) {
        res[carr[i]] = i;
        if (res[k + carr[i]] != undefined) {
            sum += 1;
        }
        // console.log(sum);
        if (res[k - carr[i]] != undefined) {
            sum += 1;
        }
        // console.log(sum);
        // console.log(res);
    }
}