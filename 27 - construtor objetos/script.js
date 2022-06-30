// const pessoa = new Object({
//     nome: 'Fernando'
// })

// console.log(pessoa)

// const carro = {
//     init(valor){
//         this.marca = valor
//         return this
//     },
//     rodas: 4,
//     acelerar() {
//         return this.marca + ' acelerou'

//     },
//     buzinar() {
//         return this.marca + ' buzinou'
//     }

// }


// const honda = Object.create(carro)
// honda.init(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferrari')
// console.log(ferrari.acelerar())

// const funcaoAutomovel = {
//     acelerar() {
//       return 'acelerou';
//     },
//     buzinar() {
//       return 'buzinou';
//     },
//   }


// const moto = {
//     rodas: 2,
//     capacete: true
// }

// Object.assign(moto, funcaoAutomovel, carro)

// console.log(moto)

const moto = {

}

Object.defineProperties(moto, {
    rodas: {
       get() {
        return this._rodas
       },
       set(valor) {
        this._rodas = valor * 4
       }

    }
})
console.log(moto)

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false


