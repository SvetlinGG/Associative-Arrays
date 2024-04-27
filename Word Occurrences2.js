function word(input){
     let wordObj = {};
     for ( let word of input){
        let counter = 1;
        
        if ( !wordObj.hasOwnProperty(word)){
            wordObj[word] = counter;  
        }else {
            wordObj[word] +=1;
        }
     }
     for ( let [word, count] of Object.entries(wordObj).sort((a,b) => b[1]-a[1])){
     console.log(`${word} -> ${count} times`);
     }



}
word(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])