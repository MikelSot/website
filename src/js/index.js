
//*****************Return***************************** */

document.getElementById("caja_arriba").addEventListener('mouseenter',mostrarRetorno);

function mostrarRetorno (){

    document.getElementById("retornar").classList.toggle('mostrar-return');
}
//----------------------------------------------------
document.getElementById("caja_arriba").addEventListener('mouseleave',escondeRetorno);

function escondeRetorno (){

    document.getElementById("retornar").classList.toggle('retornar');
}

// Arriba
document.getElementById("caja_arriba").addEventListener("click",subir);

function subir(){

    //optener la posicion del scroll
    var desplazar = document.documentElement.scrollTop;
    // ancho de la pagina
   
    if(desplazar > 0){
        // una animacion sensilla
        window.requestAnimationFrame(subir);
        // el eje Y y la velocidad a la que ira
        window.scrollTo(0,desplazar-(desplazar/15));
        boton.style.transform = "scale(0)";
    }

}

// guardamos el boton en esta variable
boton = document.getElementById("caja_arriba");

window.onscroll = function(){

    //  en que posiscion esta el scroll
    var scroll =  document.documentElement.scrollTop;
    //  el posicion donde se encuentra el escroll
   if(scroll > 500){

    boton.style.transform = "scale(1)";

   }else if(scroll < 500){
       // desaparese 
       boton.style.transform = "scale(0)";
   }

}



//*************Moistrar el plus***********************/

document.getElementById("mas").addEventListener("click",plusMas);

function plusMas (){

    document.getElementById("plus").classList.toggle('show-plus');
}




//***********Menu de barras ******* */
const menuBarras = document.getElementById("barras")
const idBarras = document.getElementById("IDbarras")
const iconMenuX = document.getElementById("IDbarraX")

menuBarras.addEventListener("click",() =>{
    
    document.getElementById("menu").classList.toggle('show-menu')

    idBarras.style.display ="none"
    iconMenuX.style.display ="block"
   
    
});


/* times */




