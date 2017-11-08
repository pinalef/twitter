

function agregar(){
	
	// tomo texto de textarea
	var tareas = document.getElementById('tarea').value;
	//se limpia textarea
	document.getElementById('tarea').value = "";
	// creo elemento div 
	var nuevasTareas = document.createElement('div');
	//contenedor donde irán las tareas
	var cont = document.getElementById('contenedor');
	
//valor para boton
var btn = document.getElementById('boton');
btn.disabled = true;
console.log('boton deshabilitado');

//validacion que textarea no este vacio
	if(tareas == null || tareas.length == 0){
		alert('¡Error ! Debe ingresar tarea');
		return false;
}else{
	texto.addEventListener('onkeypress', function(){
		btn.disabled = !btn.disabled;
 	});
}

	//checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	chck.setAttribute('class', 'check');
	var basura = document.createElement('span');
	basura.classList.add('glyphicon', 'glyphicon-trash', 'trash');
	var cora = document.createElement('span');
	cora.classList.add('glyphicon', 'glyphicon-heart' , 'corazon');

	//nodo texto del textarea
	var textoNuevaTarea = document.createTextNode(tareas);
	//contenedor de elemento
	var elementoContenedor = document.createElement('span');
	//contiene textarea
	elementoContenedor.appendChild(textoNuevaTarea);

	//paso checkbox a div
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);
	//paso span a div
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//tachado
	chck.addEventListener('click', function(){
		elementoContenedor.classList.toggle('tachado'); //agrego clase tachado a span contenedor de tareas, se activa al hacer click
	});

	//remover tarea
	basura.addEventListener('click', function(){
		cont.removeChild(nuevasTareas); //remueve tareas agregadas al div contenedor, se activa al hacer click
	});

	//corazon rojo
	cora.addEventListener('click', function(){
		cora.classList.toggle('red'); //agrega clase red al elemento span del corazon
	});
}

// function textArea(){

// var texto = document.getElementById('tarea').value;
// var btn = document.getElementById('boton');
// var clickBtn = document.getElementsByClassName('click')[0];

// //disabled boton
// 	btn.disabled = true;
// 	console.log('boton desabilitado');
	
// if(texto == null || texto.length == 0){
// 		alert('¡Error ! Debe ingresar tarea');
// 		return false;
// }else if(texto.length > 0){
// 	console.log('boton habilitado');
// 	texto.addEventListener('onkeypress', function(){
// 		btn.disabled = !btn.disabled;
// 	});
// }
// }




function contar(){
var max = "140";
var cadena = document.getElementById("texto").value;
var longitud = cadena.length;

if (longitud <= max) {
	// statement
	document.getElementById("contador")
} else {
	// statement
}
}