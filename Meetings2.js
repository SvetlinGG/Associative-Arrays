function meetings(input){
    let meeting = {};
    for ( let item of input){
        let [ day, name] = item.split(' ');
        if ( day in meeting){
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meeting[day] = name;
        console.log(`Scheduled for ${day}`);
    }
    for ( let [day, name] of Object.entries(meeting)){
        console.log(`${day} -> ${name}`);
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);