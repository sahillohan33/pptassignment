function findTheDistanceValue(arr1, arr2, d) {
    let distance = 0;
    for (const num1 of arr1) {
        let isValid = true;
        for (const num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            distance++;
        }
    }
    return distance;
}
const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
const result = findTheDistanceValue(arr1, arr2, d);
console.log(result); //Output:  2
