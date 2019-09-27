let numeros=[1,2,3,4];
let suma=0;
let promedio=0;
function eje2(numeros){
    for(let i=0; i<numeros.length;i++){
        suma+=numeros[i];
    }
    console.log("la suma es "+suma) ;
    promedio=suma/numeros.length;
    console.log("el promedio es "+promedio);
}
eje2(numeros);