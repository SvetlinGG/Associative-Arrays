function sorting(arr){

    let sortedArray = [];
    for ( let element of arr){
        sortedArray.push(element);
    }
    sortedArray.sort((a,b) => a.length - b.length || a.localeCompare(b));
    for ( let item of sortedArray){
        console.log(item);
    }

}
sorting(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);