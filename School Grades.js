function school(input){

    let studentsObj = {};
    for ( let studentInfo of input){
        studentInfo = studentInfo.split(' ');
        let name = studentInfo.shift();
        let grade = studentInfo.join(' ');
        if ( !studentsObj.hasOwnProperty(name)){
            studentsObj[name] = grade;
        }else {
            studentsObj[name] += ` ${grade}`;
        }
    }
    let sortedName = Object.keys(studentsObj).sort();
    for ( let names of sortedName){
        let avg = 0;
        let counter =0;
        for ( let element of studentsObj[names].split(' ')){
            avg += Number(element);
            counter ++;
        }
        avg /= counter;
        console.log(`${names}: ${avg.toFixed(2)}`);
    }

}
school(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);