function checkDoixung(arr){
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            console.log("Mảng không đối xứng");
            return false;
        }
    }
    console.log("Mảng đối xứng");
    return true;
}
let arr1 = [1, 2, 3, 2, 1];
let arr2 = [1, 3, 3, 2, 1];
checkDoixung(arr1);
checkDoixung(arr2);