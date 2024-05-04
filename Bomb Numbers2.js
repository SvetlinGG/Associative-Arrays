function bomb(arr, bombInfo){
    
    let specialNum = bombInfo[0];
    let bombPower = bombInfo[1];
    let sum = 0;
    for ( let i=0; i < arr.length; i++){
        let currNum = arr[i];
        let bombIndex = Math.max(0, i - bombPower);
        let bombIndexLength = bombPower * 2 + 1;

        if ( currNum === specialNum){
            arr.splice(bombIndex, bombIndexLength);
            i = i - 1;
        }
    }
    for ( let i =0; i< arr.length; i++){
        let num = arr[i];
        sum += num;
        
    }

    console.log(sum);

}
//bomb([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
bomb([1, 7, 7, 1, 2, 3],[7, 1]);