function garage(input){
    let garageObj = {};
    for ( let info of input){
        let [garageNumber, ...car] = info.split(' - ');

        if ( garageNumber in garageObj){
            garageObj[garageNumber].push(...car);
            continue;
        }
        garageObj[garageNumber] = car;
    }
    let entries = Object.entries(garageObj);
    for ( let [garage, info] of entries){
        console.log(`Garage № ${garage}`);
        for ( let item of info){
        //let [ color, fuel, model] = item.split(': ');
        console.log(`--- ${item.replace(/\:/g, ' -')}`);
        }
    }

}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);