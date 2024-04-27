function occurrences(input){

    let wordObj = {};
    input = input.toLowerCase().split(' ');
    for ( let word of input){
        if ( wordObj.hasOwnProperty(word)){
            wordObj[word] ++;
        }else{
            wordObj[word] =1;
        }
    }
    let result = Object.keys(wordObj).filter(key => wordObj[key]%2 !==0);
    console.log(result.sort((a,b) => wordObj[b] - wordObj[a]).join(' '));


}
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')