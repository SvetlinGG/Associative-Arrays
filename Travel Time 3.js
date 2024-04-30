function traveling(input){
    let destination = {};
    let sortedDestination = {};
    for ( let line of input){
        let [country, town, offer ] = line.split(' > ');
        offer = Number(offer);
        if ( !destination.hasOwnProperty(country)){
            destination[country] = new Map();
        }
        if ( destination[country].has(town) && destination[country].get(town) < offer){
            continue;
        }
        destination[country].set(town, offer);
    }
    let result = Object.entries(destination);
    for ( let [key, value] of result){
        let sorted = Array.from(value).sort((a, b) => a[1] - b[1]);
        for ( let [town, offer] of sorted){
            if ( !sortedDestination.hasOwnProperty(key)){
                sortedDestination[key] = new Map();
            }
            sortedDestination[key].set(town, offer);
        }
    }
    let finalResult = Object.entries(sortedDestination).sort((a, b) => a[0].localeCompare(b[0]));
    for ( let [destinationName, townOffer] of finalResult){
        let arrayFromTownOffer = Array.from(townOffer);
        let str ='';
        for ( let [town, offer] of arrayFromTownOffer){
            str += `${town} -> ${offer} `;

        }
        console.log(`${destinationName} -> ${str}`);
    }



}
traveling([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);