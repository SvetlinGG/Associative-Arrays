function sorting(arr){

    arr = arr.sort((a, b) => b - a);
    let sortedArr = [];
    while ( arr.length){

        if ( arr.length){
            sortedArr.push(arr.pop());
        }
        if ( arr.length){
            sortedArr.push(arr.shift())
        }
    }
     console.log(sortedArr);

}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sorting([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);