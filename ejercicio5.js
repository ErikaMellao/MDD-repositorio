//Crea un array de 3 números, multiplícalos por 2 y
// guárdalos en un nuevo array usando map.
let numeros= [3,6,1];
console.log("El array inicial es: ",numeros);
let newArr = numeros.map(function(numeros) {
  return numeros*2;
});
console.log("El nuevo array es:" ,newArr);