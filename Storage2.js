function storage(arr){

    let map = new Map();
    
    for ( let item of arr){
        let tokens = item.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if ( !map.has(product)){
            map.set(product, +qty);
        }else{
            let currQty = map.get(product);
            let newQty = currQty += qty;
            map.set(product, newQty);
        }
    }
    
    for ( let product of map){
        console.log(`${product[0]} -> ${product[1]}`);
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);