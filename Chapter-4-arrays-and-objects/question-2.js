var reverseArray = function(arr) {
    var newArray = [];
    for (var i = arr.length -1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

var reversed = reverseArray([1,2,3,4,5]);
console.log(reversed);

var reverseArrayInPlace = function(arr) {
    var i = 0;
    while (i < arr.length/2) {
        var tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
        i++;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5]))
        
