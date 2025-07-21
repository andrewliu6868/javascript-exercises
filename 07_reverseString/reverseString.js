const reverseString = function(s) {
    res = '';
    arr = s.split(" ");

    for(let cur = arr.length - 1; cur >= 0;  cur--){
        temp = arr[cur];
        for(let i = temp.length - 1; i >= 0; i--){
            res = res + temp[i];
        }
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
