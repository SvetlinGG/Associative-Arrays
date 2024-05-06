function print(arr,str){
    let newArr = [];
    for ( let element of arr){
        element = element.split(' , ').map(s => s+''+str);
        
        newArr.push(element);
    }
    console.log(newArr.join(''));

}
print(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-');