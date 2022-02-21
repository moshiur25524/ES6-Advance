class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a support session');

    }
}

const aamir = new Support('Aamir khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
const sharuk = new Support('sharuk khan','Dubai');
const Akshay = new Support('Akshay Kumar','Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, Akshay)
// console.log(aamir);
// console.log(salman);