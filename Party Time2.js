function party(input){

    let vipGuests = new Set();
    let regularGuests = new Set();
    while ( input[0] !== 'PARTY'){
        let currentGuests = input.shift();
        if ( !isNaN(currentGuests[0])){
            vipGuests.add(currentGuests);
        }else{
            regularGuests.add(currentGuests);
        }
    }
    input.shift();
    for ( let guest of input){
        vipGuests.delete(guest);
        regularGuests.delete(guest);
    }
    let result = Array.from(vipGuests.keys()).concat(Array.from(regularGuests.keys()));
    console.log(result.length);
    result.forEach(el => console.log(el));

}
party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);