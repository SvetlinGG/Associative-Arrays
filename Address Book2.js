function address(input){

    let addressBook = {};
    for ( let item of input){
        let [ name, address] = item.split(':');
        addressBook[name] = address;
    }
    let sortedNames = Object.entries(addressBook).sort();
    for ( let [names, address] of sortedNames){
        console.log(`${names} -> ${address}`);
    }


}
address(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);
