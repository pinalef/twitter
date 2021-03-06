
function agregar(){
	// tomo texto de textarea
	var tareas = document.getElementById('tarea').value;
	//se limpia textarea
	document.getElementById('tarea').value = "";
	// creo elemento div 
	var nuevasTareas = document.createElement('div');
	//contenedor donde irán las tareas
	var cont = document.getElementById('contenedor');
	//obtengo el boton
	var btn = document.querySelector('button');
	
	//Quito el evento si el  textarea esta vacio
	if(tareas == null || tareas.length == 0){
		btn.removeEventListener('click', agregar);
	console.log('entra a quitar el evento en agregar');
	return false;
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
	//nodo hora 
	var hora = document.createTextNode(moment().format('LT'));
	var espacio = document.createElement('br');
	elementoContenedor.appendChild(espacio);
	elementoContenedor.appendChild(hora);

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
	})

	//remover tarea
	basura.addEventListener('click', function(){
		cont.removeChild(nuevasTareas); //remueve tareas agregadas al div contenedor, se activa al hacer click
	})	

	//corazon rojo
	cora.addEventListener('click', function(){
		cora.classList.toggle('red'); //agrega clase red al elemento span del corazon
	})
}

function focoText(){
//obtengo el textArea
	var tareas = document.getElementById('tarea').value;
//obtengo el boton agregar
	var btn = document.querySelector('button');

	//Si el largo te textarea es mayor a 1 se llama a la funcion agregar y si esta vacio, quito el evento click
	if (tareas.length == 1){
		btn.addEventListener('click', agregar);
		console.log("agrega evento en foCoText");
		}else if(tareas == null || tareas.length == 0){
			console.log("elimina evento en foCoText");
		btn.removeEventListener('click', agregar);
		}//al presionar enter crece el textArea
		else if (tareas==13) {
			tareas.innerHTML = '\n';
		}
	

	//contiene el largo del textArea
	var long = tareas.length;
	var counter = document.getElementById('count');
	
	counter.innerHTML = 140 - long;
		
	//Evalua si pasa los 140 caracteres
	if(tareas.length > 140){
		counter.removeEventListener('click', agregar);
	}//evalua si pasa los 130 caracteres
	else if(tareas.length > 130){
		counter.style.color = 'purple';
	} //evalua si pasa los 120 caracteres
	else if(tareas.length > 120){
		counter.style.color = 'green';
}// si son entre 0 y 120 caracteres el color sera negro
else if(tareas.length > 0 || tareas.length <120){
	counter.style.color = 'black';
}

}