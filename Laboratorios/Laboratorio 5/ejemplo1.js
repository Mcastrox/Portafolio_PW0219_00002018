let arr=[1,2,3,true];
let arrn =[];
function lista (arr){
    for(let i=0;i<arr.length;i++){
        
        arrn.push(typeof (arr[i]));

    }
    return arrn;

for(let j=0; j<arrn.length;j++){
    console.log(arrn[j]);
}
}
lista(arr);