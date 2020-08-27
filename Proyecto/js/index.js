const PI = 3.141695;
const IVA = 25;
//ECMAJS 6
let variable_global = undefined;
var variable_global_var = 0;

variable_global = prompt("Captura Valor: ", "Coloca la referencia de (1 a 10)");

// variable_global_var = prompt("Captura Valor: ", "Coloca la referencia de (1 a 10)");
// alert("El doble es: " + variable_global_var * variable_global_var);

if(!isNaN(variable_global)){
   alert("El doble es: " + variable_global * variable_global);
//    if(variable_global <= 0) alert("calificación invalida");
//    if(variable_global > 0 && variable_global <= 20) alert("calificación baja");
//    if(variable_global >= 21 && variable_global <= 40) alert("calificación baja-media");
//    if(variable_global >= 41 && variable_global <= 60) alert("calificación media");
//    if(variable_global >= 61 && variable_global <= 90) alert("calificación buena");
//    if(variable_global >= 91 && variable_global < 101) alert("calificación excelente");
//    if(variable_global >= 101) alert("calificación invalida");

    // switch (true) {
    //     case (variable_global > 0 && variable_global <= 20): alert("calificación baja"); 
    //         break;
    //     case (variable_global >= 21 && variable_global <= 40): alert("calificación baja-media"); 
    //         break;    
    //     case (variable_global >= 41 && variable_global <= 60): alert("calificación media"); 
    //         break;    
    //     case (variable_global >= 61 && variable_global <= 90): alert("calificación Buena"); 
    //         break;    
    //     case (variable_global >= 91 && variable_global < 101): alert("calificación Buena"); 
    //         break;    
    //     default:
    //         alert("calificación invalida"); 
    //         break;
    // }

    let vigia = variable_global;
    let sumatoria = 0;
    //   sereno = serenazgo = vigia
    //        0                0     <    n  ; 01234567890
    // for (let serenazgo = 0; serenazgo < vigia; serenazgo++) {
    //     sumatoria += serenazgo; // 0+1+2+3+4+5+6....n 
    // }

    // let serenazgo = 0
    // for (;serenazgo < vigia;) {
    //     sumatoria += serenazgo; // 0+1+2+3+4+5+6....n 
    //     serenazgo++
    // }

    
    // for (let serenazgo = 0;; serenazgo++) {
    //     sumatoria += serenazgo; // 0+1+2+3+4+5+6....n 
    //     if(serenazgo < vigia) break;
    // }

    // let serenazgo = 0;
    // for (;;) {
    //     sumatoria += serenazgo; // 0+1+2+3+4+5+6....n 
    //     if(serenazgo < vigia){ break; } else { serenazgo++; }
    // }

    

    // while (vigia >= 0) {
    //     sumatoria += vigia;
    //     vigia--; 
    // }
    
    // console.log(sumatoria); //10! = 45 0+1+2+3+4..9
    
    // do {
    //     sumatoria += vigia;
    //     vigia--; 
    //     } while (vigia >= 0);

    // console.log(sumatoria);
    // console.log(sumatoria);

}else{
    alert("No es valido: " + variable_global);
}