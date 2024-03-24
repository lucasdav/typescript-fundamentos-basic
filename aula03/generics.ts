function primeiroElemento<T>(arr: T[]): T {
    return arr[0];
}

let numeros = primeiroElemento([1, 2, 3]); 
let palavras = primeiroElemento(['Hello', 'World']);

console.log(numeros)
console.log(palavras)