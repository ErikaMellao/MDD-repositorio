//Crea un array de números y utiliza filter para obtener 
// los números mayores a 5.
let numeros = [4,6,2,12,5];
let mayores=numeros.filter(function(n){
    if (n>5) {
        return n;
    }
});
console.log(mayores);