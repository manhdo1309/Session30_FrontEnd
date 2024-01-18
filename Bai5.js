function upperLast(str){
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
        let word = arr[i];
        if(word.length > 0){
            let lastLetter = word.charAt(word.length - 1);
            let upperLastletter = lastLetter.toUpperCase();
            arr[i] = word.slice(0, -1) + upperLastletter;
        }
    }
    return arr.join(" ");
}
let array = "Xin chao cac ban";
console.log(upperLast(array));