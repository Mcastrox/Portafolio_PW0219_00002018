let numero=2;
let arreglo=[1,2,3,4,2,6];
let c=0;
function contador(numero,arreglo){
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]==numero)
        c++;
    }
    console.log("la cantidad de veces es "+c);
}
contador(numero,arreglo);