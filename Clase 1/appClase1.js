//Datos de primera clase: meter en una variable una funcion, objeto, dato.

/*
    scope lexico 
    funcion dentro de otra funcion
*/

function multiplyBy(n){
    var base = 10;
    return function(){
        base = base * n;
        return base;
    }
}

var multiplyByFive = multiplyBy(5);
console.log(multiplyByFive());
console.log(multiplyByFive());
console.log(multiplyByFive());
/////////////////////////////////////

//ES6
function multiplyBy(n) {
    this.base = 10;
    return () => {
        //arrow function no genera contexto, no abusa del hoisting
        this.base = this.base * n;
        return base;
    }
}

//inmutalidad de datos
const multiplyBy = (n) => {
    return () => {
        var magicNumber = magicNumber * n;
        return magicNumber;
    }
}

var multiplyByFive = multiplyBy(5);
console.log(multiplyByFive());
console.log(multiplyByFive());
console.log(multiplyByFive());

console.log(magicNumber);

/////////////////////////////////////

const multiplyBy = (n) => () => 10*n;

//es lo mismo

const multiplyBy = (n) => {
    return () => {
        return 10 * n;
    }
}

/////////////////////////////////////

if (checkMyFunction()){
    let result = {};
}
//let puede usarse solamente dentro de las llaves.
console.log(result);

//////////////////////////////////////

const number = 10;

const myString = `mi numero es {$number}`;

//////////////////////////////////////

//programacion funcional: composición de funciones modulares
//funcion impura: aquella que tiene efectos secundarios, si bien transforma las entradas en salidas, puede tener efectos secundarios.

//forma impura
const double = (numbers) =>{
    for (let i=0; i<numbers.length; i++){
        numbers[i]= numbers[i] * 2;
    }
    return numbers;
};

//forma pura

const double = (numbers) => numbers.map((n) => n * 2);


console.log(double([1,2,3]));

//////////////////////////////////////

//filter
const myArray =[1,2,3,4,5,6,7,8,9];

console.log(myArray.filter((element) => element % 2 ===0));

//find 
const users = [{
    id: 1,
    username: 'pablo'
}, {
    id: 2,
    username: 'pablo2'
}, {
    id: 3,
    username: 'pablo3'
}];

console.log(users.find((element) => element.id  === 2));

//some - solo devuelve verdadero o false cuando uno solo lo es
users.some((element) => element.id === 2);

//every - verdadero cuando todos los elementos del array son verdaderos
users.every((element) => element.id < 4);

//includes - devuelve verdadero o falso si cumple con lo solicitado dentro del parentesis
users.includes({ id: 2, username: 'pablo2' });

//keys
Object.keys({ a: 'aaa', b: 'bbb', c: 'ccc' });

//values
Object.values({a: 'aaa',b: 'bbb',c: 'ccc'
});

//reduces
const allUserNames = users.reduce((acc, user) => {
    return `${acc}${user.username}`;
}, '');

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = number.reduce((acc, n) => acc + n);