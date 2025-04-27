//Crea un array de números y usa reduce para obtener la suma total.
const array= [5,7,2,8,11]
let suma= array.reduce(function(n,valorA)
{
return n + valorA;
}, 0);
console.log("La suma es: ",suma);