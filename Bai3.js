function sortString(str){
    let array = str.split("");
    let charArr = [];
    let numArr = [];
    let othersArr = [];
    for(let i = 0; i < array.length; i++){
        if(/^[a-zA-Z]$/.test(array[i])){
            charArr.push(array[i]);
        }
        else if(!isNaN(array[i])){
            numArr.push(array[i]);
        }
        else{
            othersArr.push(array[i]);
        }
    }
    array = charArr.concat(numArr, othersArr);
    console.log(array);
}
let string = "32hva0!421$3j2h#";
sortString(string);
