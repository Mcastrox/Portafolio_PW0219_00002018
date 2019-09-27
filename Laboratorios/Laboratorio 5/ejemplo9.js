
function area(){
let area=0;
 var radio=prompt();
if(radio<=0)
console.log("-1");
else{
    area=Math.pow(radio,2)*Math.PI;
}
console.log("el area es :"+ area);
}
area();