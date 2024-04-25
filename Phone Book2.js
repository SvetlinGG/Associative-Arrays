function phoneBook(input){
    let phoneBook = {};

    for ( let item of input){
        let [ name, number] = item.split(' ');
        phoneBook[name] = number;
    }
    for ( let [name , number] of Object.entries(phoneBook)){
        console.log(`${name} -> ${number}`);
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);