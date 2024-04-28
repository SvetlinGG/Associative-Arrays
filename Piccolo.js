function piccolo(arr){
    let parking = new Set();
    for ( let carNumbers of arr){
        let [direction, carNumber] = carNumbers.split(', ');
        if ( direction === 'IN'){
            parking.add(carNumber);
        }else if ( direction === 'OUT'){
            parking.delete(carNumber);
        }
    }
    let sortedCars = [...parking].sort((a,b) => a.localeCompare(b));
    if ( sortedCars.length === 0){
        console.log(`Parking lot is Empty`);
    }else {
        console.log(sortedCars.join('\n'));
    }

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);