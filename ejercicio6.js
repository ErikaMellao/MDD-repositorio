//Crea un array de objetos donde cada objeto tenga un nombre y una edad. 
// Luego, muestra en consola el nombre de cada persona usando forEach.
let persona= [
    {nombre:"Erika", edad:20},
    {nombre:"Valentina", edad:24}
];
persona.forEach(function(element){
    console.log(element.nombre);
})
