//  task 1

let user = {};
user.name = 'Pylyp';
user.surname = 'Shevchenko';
user.name = 'Sergiy';

delete user.name;

// task 2

let employeeSalaries = {
    'Petrenko' : 1500,
    'Krasnenko' : 1600,
    'Slavchuk' : 1200,
    'Marko' : 2000   
}

let counter = 0;
for(let key in employeeSalaries) {
    let salary = employeeSalaries[key];
    counter += salary;
}
console.log('Summ of salaries = ' + counter);

// task 3

function mathematick (a,b,param) {
    let result;
    try{
    switch(param) {
        case 'plus' : result = a + b;
        break;
        case 'minus' : result = a - b;
        break;
        case 'multiply' : result = a * b;
        break;
        case 'divide' : result = a / b;
        break;
        default : console.log('So param don`t exists ');
        break;

    }
    return result;
} catch(err) {
    console.log("You have Error " + err);
}
}
 
console.log("Yours result is - " + mathematick(6,60,'minus'));
console.log("Yours result is - " + mathematick(6,60,'divide'));
 console.log("Yours result is - " + mathematick(10,5,'multiply'));
 console.log("Yours result is - " + mathematick(1,20,'plus'));
