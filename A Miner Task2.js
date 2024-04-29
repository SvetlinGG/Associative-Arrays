function miner(input){

    let minerObj = {};
    for ( let i=0; i < input.length; i+=2){
        let resource = input[i];
        let qty = Number(input[i+1]);
        //minerObj[resource] = qty;

        if (!minerObj.hasOwnProperty(resource)){
            minerObj[resource] = qty;
        }else{
            minerObj[resource] += qty;
        } 
    }
    let sorted = Object.entries(minerObj);
    for ( let [ name, qty] of sorted){
        console.log(`${name} -> ${qty}`);
    }

}
miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )