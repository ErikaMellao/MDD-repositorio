//Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. 
//Usa await para esperar su resultado e imprimirlo.
function esperaDosSegundos(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Que tengas un buen dia!!");
        },2000);
    });
}
async function mensaje() {
    console.log("Recibirás un mensaje en 2 segundos");
    const resultado= await esperaDosSegundos();
    console.log(resultado);
}
mensaje();