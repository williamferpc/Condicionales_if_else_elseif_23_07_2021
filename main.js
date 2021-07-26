// 








// let mensaje  = (true) 
//     ? (
//         console.log(":V"),
//         console.log(5+8),
//         "Condicion Permitida"
//     )
//     : 
//         "Condicion denegada";
// console.log(mensaje);

// let mensaje = (false) ? "Condicion Permitida" : "Condicion denegada" ;
// console.log(mensaje);

// if(true)
//     console.log("Condicion Permitida");
// else 
//     console.log("Condicion denegada"); 

// if(false) console.log("Condicion Permitida"); 
// else console.log("Condicion denegada"); 









let opciones = prompt(`
Ingrese una de las opciones para entrar a la puerta Inligente
    A. Ingresar la llave
    B. Huella dactilar
    C. Lectura de voz
`);

if( (opciones == 'A' || opciones == 'B') || opciones== 'C'){
//      (FALSE        ||     FALSE)      ||    TRUE
//                FALSE                   ||    TRUE
//                               TRUE
    console.log(`La puerta se esta abriendo BIENVENIDO usuario ingresantes la credencia correcta`);
}else{
    console.log(`La puerta esta cerrada acceso denegado :(`);
}









// let a = 5;
// let b = 10;
// let numero = parseInt(prompt(`Ìngrese un numero`));

// if(numero >= a && numero <= b){
//     console.log(`El numero ${numero} esta entre el rango ${a}, ${b} por lo tanto es permitido`);
// }else{
//     console.log(`El numero ${numero} no esta en el rango ${a}, ${b} por lo tanto no es permitido`);
// }












// let a = 5;
// let b = 5;
// if(!(a >= b)){
//     console.log(`${a} no es mayor o igual que ${b} pero el operador NOT cambio su resultado a true`);
// }else{
//     console.log(`${a} si es mayor o igual que ${b} pero el operador NOT cambio su resultado a false`);
// }
