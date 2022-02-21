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

class studentCare{
    name;
    designation = 'Student care Web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(){
        console.log(this.name, 'build a routine',student);
    }
}

const aamir = new Support('Aamir khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
const sharuk = new Support('sharuk khan','Dubai');
const Akshay = new Support('Akshay Kumar','Dubai');

const alia = new studentCare('Alia Bhatt', 'Mumbai');
console.log(alia);