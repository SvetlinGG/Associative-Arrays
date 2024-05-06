function elements(arr){
    let newArr = [];
    let points = 0
    for ( let command of arr){
        if ( command === 'add'){
            points +=1;
            newArr.push(points);
        }else if ( command === 'remove'){
            points -=2;
            //newArr.push(points)
        }
    }
    if ( points <= 0){
        console.log('Empty');
    }
    for ( let element of newArr){
        console.log(element);
    }

    
}
elements(['add', 
'add', 
'remove', 
'add', 
'add']);