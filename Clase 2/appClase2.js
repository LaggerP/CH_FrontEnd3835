const array = [1,2,3,4,5,6];
const newArray = [ ...array ];

////////////////////////////////////

//PROMISES = tipo de dato que promete devolver un dato (son asincronicos).

someAsyncFn()
    .then((data) => {
        /*
            para evitar el error piramidal de los callbacks se retorna la data
            si no se necesita realizar otra promesa se hace todo el uso de los datos dentro del .then();
        */
       return someOtherAsyncFn(data);

    }) //promesa no rechazada - recibe el dato no rechazado
    .then((newData) => {

    }) //data recibida del retorno de la anterior promesa
    .catch( (err) => {

    }) //promesa rechazada - recibe el error 

    //como funciona una promesa por dentro
const promisefiedNewFn = (data) =>{
    return new Promise((resolve, reject) => {
        oldAsync
    })
}

////////////////////////////////////

//CLASES = no existen las clases como en java o c++, aca las clases son prototipadas

class Animal {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    callFc(){
        console.log(this.name);
    }
}

const dog = new Animal ('bobby', 10);
dog.callFc();
