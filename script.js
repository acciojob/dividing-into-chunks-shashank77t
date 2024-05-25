const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
   let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] > n) {
            // If adding arr[i] exceeds the max sum n, start a new subarray
            result.push(currentSubarray);
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        } else {
            // Otherwise, add the element to the current subarray
            currentSubarray.push(arr[i]); 
            currentSum += arr[i];
        }
    }

    // Add the last subarray if it has elements
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
