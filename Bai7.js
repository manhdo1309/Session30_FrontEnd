function findSubarr(arr, num){
    let n = 1;
    let number = num;
    let flag = true;
    while(n < arr.length){
        for(let i = 0; i < arr.length; i++){
            let subArray = [];
            for(let j = i; j < i + n; j++){
                if(arr[j] !== undefined){
                    subArray.push(arr[j]);
                }
            }
            if(subArray.length === n){
                let sum = 0;
                for(let element of subArray){
                    sum += element;
                }
                if(sum > number){
                    console.log(subArray);
                    flag = true;
                    n = array.length;
                    break;
                } else{
                    flag = false;
                }
            }  
        }  
        n++;
    }
    if(flag === false){
        console.log("Không có mảng con thỏa mãn");
    }
}
let array = [1, 3, 5, 2, 7, 6, 4];
let number = 8;
findSubarr(array, number);