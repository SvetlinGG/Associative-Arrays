function travel(arr){

    let destinations = {};
    for ( let info of arr){
        let [ country, city, price] = info.split(' > ');
        price = Number(price);
        if ( country in destinations){
            if ( city in destinations[country]){
                if ( price < destinations[country][city]){
                    destinations[country][city] = price;
                }
            }else {
                destinations[country][city] = price;
            }
        }else {
            destinations[country] = { [city]:price};
        }
    }
    let entries = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]));
    for ( let [ country, towns] of entries){
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        let result =`${country} -> `;
        for ( let [town, cost] of townEntries){
            result += `${town} -> ${cost} `;
        }
        console.log(result);
    }
    

}
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);