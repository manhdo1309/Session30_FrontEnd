function oddSum(n){
    let arrSum = [];
    if(n % 2 === 0){
        n--;
    }
    for(let i = 1; i <= n; i += 2){
        arrSum.push(i);
    }
    let sum = 0;
    for(let i = 0; i < arrSum.length; i++){
        sum += arrSum[i];
    }
    while(sum % 2 === 0){
        arrSum.pop();
        sum = arrSum.reduce((acc, num) => acc + num, 0);
    }
    console.log(arrSum);
    
}
let n = +prompt("Nhập vào số nguyên dương bất kỳ");
oddSum(n);