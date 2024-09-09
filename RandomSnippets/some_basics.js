function product(a,b){
    return a*b;
}

let result = product(5);
console.log(result);

const he = ['a', 'b'];
const she = ['c', 'd'];
const we = he.concat(she);
console.log(we)

class User{
    constructor(){
        this.name = 'Sudheer';
    }

    constructor(){
        this.age = '36';
    }
}

const me = new User();
console.log(me);