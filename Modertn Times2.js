function modern(text){
    let textArray = [];
    text = text.split(' ');
    for ( let item of text){
        if ( !item.indexOf('#')){
            textArray.push(item);
        }
    }
    for ( let letter of textArray){
        letter = letter.slice(1);
        console.log(letter);
    }


}
modern('The symbol # is known #variously in English-speaking #regions as the #number sign')
