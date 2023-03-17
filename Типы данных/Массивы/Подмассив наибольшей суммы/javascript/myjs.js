function getMaxSubSum(arr) {
    let maxSum = 0;
    let subarrSum = 0;
    let subarr = [];
    let maxsubarr = [];
    for (let i of arr) {
        subarrSum += i;
        subarr.push(i);
        if (subarrSum > maxSum) {
            maxSum = subarrSum;
            maxsubarr.length = 0;
            for (let k of subarr) {
                maxsubarr.push(k);
            }
        }
        if (subarrSum < 0) {
            subarrSum = 0;
            subarr.length = 0;
        }
    }
    maxsubarr.push(`Сумма: ${maxSum}`)
    return maxsubarr;
}

alert(getMaxSubSum([5, 6, 9, -10, 7, 15])); // 32
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0