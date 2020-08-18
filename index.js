
const largestSubarraySum = (array) => {
    let maxSoFar = 0;
    let maxEndingHere = 0

    for (let x = 0; x < array.length; x++) {
        maxEndingHere = array[x];
        for (let j=x+1; j<array.length; j++) {
            maxEndingHere += array[j]
            if (maxEndingHere > maxSoFar) {maxSoFar = maxEndingHere}
        }
    }
    return maxSoFar
}
