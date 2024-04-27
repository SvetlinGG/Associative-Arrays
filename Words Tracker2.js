function tracker(input){

    let wordObj = {};
    let findingWords = input.shift().split(' ');
    for ( let word of findingWords){
        wordObj[word] = 0;
    }
    for ( let word of input){
        if ( word in wordObj){
            wordObj[word] ++;
        }
    }
    for ( let [word, count] of Object.entries(wordObj).sort((a,b) => b[1] - a[1])){
        console.log(`${word} - ${count}`);
    }

}
tracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );