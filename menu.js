$(document).ready(main);//cuand el documento este listo, vamos a ejecutar la funcion main
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){//como es una clase el menu_bar le ponemos de la misma forma, y cuando demos click, cumple una funcion
		// $('nav').toggle(); //cuando den un click en el menu, el menu de navegacion (nav), esa es la forma sencilla
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 //mostramos y ocultamos los submenu
 $('.submenu').click(function(){
 	$(this).children('.children').slideToggle();//los hijos que tengan la clase .children de submenu van a  tener lo siguiente
 });

}
