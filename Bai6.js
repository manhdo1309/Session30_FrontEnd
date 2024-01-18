function triangleCount(arr){
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
let array = [4, 6, 3, 7, 9];
triangleCount(array);