function findSubarr(arr, num){
    let number = num;
    let flag = true;
    for(let i = 0; i < arr.length; i++){
        let subArray = [];
        for(let j = i; j < i + 3; j++){
            if(arr[j] !== undefined){
                subArray.push(arr[j]);
            }
        }
        if(subArray.length === 3){
            let sum = 0;
            for(let element of subArray){
                sum += element;
            }
            if(sum === number){
                console.log(subArray);
                flag = true;
                break;
            } else{
                flag = false;
            }
        }  
    }  
    if(flag === false){
        console.log("Không có mảng con thỏa mãn");
    }
}
let array = [1, 3, 5, 2, 7, 6, 4];
let number = 10;
findSubarr(array, number);