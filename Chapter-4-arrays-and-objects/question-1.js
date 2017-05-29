
var range = function(start, end, step) {
    if (step == undefined)
        step = 1;

    numbers = [];
    for(var i = 0; i <= end - start; i += step) {
        numbers.push(start + i);
    }
    return numbers;
}

var sum = function(numbers) {
    sum = 0; 
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

var nums = range(5, 2, -1);
console.log(nums);
