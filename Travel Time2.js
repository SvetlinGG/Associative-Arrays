function travel(input){
    let travelObj = {};
    for ( let info of input){
        let [ country, city, price] = info.split(' > ');
        price = Number(price);
        if ( country in travelObj){
            if ( city in travelObj[country]){
                if ( price < travelObj[country][city]){

                }
            }else{
                travelObj[country][city] = price;
            }
        }else{
            travelObj[country] = { [city]: price};
        }

    }
    let entries = Object.entries(travelObj).sort((a,b) => a[0].localeCompare(b[0]));
    for ( let [country, town] of entries){
        let townEntries = Object.entries(town).sort((a, b) => a[1] - b[1]);
        let result = `${country} -> `;
        for ( let [towns, cost] of townEntries){
            result += ` ${towns} -> ${cost} `;

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