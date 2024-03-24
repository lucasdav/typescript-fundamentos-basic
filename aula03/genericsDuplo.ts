// pode guardar dois tipos diferentes, como um número e uma string
function caixaDupla<T, U>(item1: T, item2: U): [T, U] {
    return [item1, item2];
  }