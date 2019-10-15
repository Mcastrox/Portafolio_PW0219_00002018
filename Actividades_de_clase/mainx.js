
// para preguntar el nombre
window.onload=function prompter() {
    var reply = prompt("Bienvenido ¿cuál es tu nombre?", "")
    alert ( "Es un gusto tenerte aquí " + reply + "!")
    }

// para que el titulo se vea mas terrorifico parpadeante
window.setInterval (BlinkIt, 200);
var color = "red";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "red" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='36px';}


// para que funcione bien la flecha de ir al comienzo
$(document).ready(function(){
    $('.arriba').hide();

    $(window).scroll(function(){
        if($(this).scrollTop () >100){
            $('.arriba').fadeIn(1000);
        }
        else{
            $('.arriba').fadeOut(1000);
        }
    });

    $('.arriba').click(function(){
        $('body, html').animate({
            scrollTop:0
        });
    })

});

//advertencia acerca de que ira a una pista.
document.getElementById("sens").addEventListener("click",()=>{
    alert ("Estas a punto de conocer una pista importante...")
});
