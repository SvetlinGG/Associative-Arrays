function company(input){

    let companyEmployee = {};
    for ( let companyEmployees of input){
        let [ company, employeeId] = companyEmployees.split(' -> ');
        if ( company in companyEmployee){
            if ( !companyEmployee[company].includes(employeeId)){
                companyEmployee[company].push(employeeId); 
            }
            
        }else {
            companyEmployee[company] =[];
            companyEmployee[company].push(employeeId);
        }
    }
    let entries = Object.entries(companyEmployee).sort((a, b) =>a[0].localeCompare(b[0]));
    for ( let [company, employee] of entries){
        console.log(`${company}`);
        for ( let people of employee){
            console.log(`-- ${people}`);
        }
    }

}
company([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);