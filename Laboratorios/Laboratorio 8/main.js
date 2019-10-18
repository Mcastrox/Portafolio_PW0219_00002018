/* 
boton
checkbox 
combo box 
imput de texto 
tbody 
*/

let carnet_field=document.querySelector("#carnet_field")
let schedule_list =document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")

let student_List=[];
let serial=0

let printArray= ()=>{
    tbody.innerHTML=""
    student_List.forEach((elem, index)=>{
        let new_row= document.createElement("tr")

        new_row.classList.add("table-active")

        new_row.innerHTML = `
            <td> ${elem.carnet} </td>
            <td> ${elem.horario} </td>
            <td> ${elem.datetime_string} </td>
            <td> ${elem.tarde} </td>
        `
        let new_cell=document.createElement("td")
        let new_btn=document.createElement("button")
    

        new_btn.className="btn btn-danger"
        new_btn.innerText="eliminar"
        new_btn.value= index

        new_btn.addEventListener("click", (event) =>{
            let id_actual= event.target.value;
            student_List.forEach((element,pos)=>{
                if(id_actual==element.id){
                    student_List.splice(pos,1)
                    printArray();
                }
            })
        })

        new_cell.appendChild(new_btn)
        new_row.appendChild(new_cell)
        tbody.appendChild(new_row);

    })

}

let submit_btn = document.querySelector("#submit_btn")

let tbody = document.querySelector("#table_body")

let carnet_regex= new RegExp("^[0-9]{8}$")// validacion de carnet 


let addStudent = (obj)=> {
    let datetime= new Date();
    let datetime_string= datetime.toLocaleString()
    console.log(obj)
    console.log(serial)
    student_List.push({

        "id": serial,
        "carnet": obj.carnet,
        "horario": obj.schedule,
        "tarde": obj.late,
        "ingreso":datetime_string

    })
    printArray()
    serial++
}

let parseLateBool= (value)=>{
if(value){
    return "si"
}

return "no"
}

submit_btn.addEventListener("click",()=>{
let carnet=carnet_field.value
let schedule= schedule_list.options [schedule_list.selectedIndex].text
let late= parseLateBool (late_switch.checked)
console.log(late);
let result_obj ={
    "carnet": carnet,
    "schedule": schedule,
    "late": late
}

if(carnet_regex.test(carnet)){
    addStudent(result_obj)
    printArray();
}
else{
    alert ("Formato incorrecto")
}

})

carnet_field.addEventListener("keyup", (event)=>{
   if(event.keyCode==13){
       submit_btn.click()
   }
   
})