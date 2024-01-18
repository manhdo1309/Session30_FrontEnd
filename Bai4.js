function isPrime(arr){
    for(let i = 0; i < arr.length; i++){
        let isprimeNumber = true;
        for(let j = 2; j <= Math.sqrt(arr[i]); j++){
            if(arr[i] % j === 0){
                isprimeNumber = false;
                break;
            }
        }
        if(isprimeNumber){
            console.log(arr[i]);
        }
    }
}
let array = [2, 4, 5, 7, 8, 9, 10, 13];
isPrime(array);