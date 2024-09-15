let menuVisible = false;

function mostrarOcultarMenu(){
	if(menuVisible){
		document.getElementById("nav") .classList ="";
		menuVisible= false;
		
	}else {
			document.getElementById("nav") .classList ="responsive";
		menuVisible= true;
	}
}

function seleccionar (){
	document .getElementById ("nav") .classList "";
	menuVisible = false;
	
}

function efectoHabilidades (){
	var skills = document.getElementById("skills");
	var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	if (distancia_skills>=300){
		let habbilidades = document.getElementsByClassName ("progreso");
		habilidades [0].classList.add("Illustrator");
		habilidades [1].classList.add("Photoshop");
		habilidades [2].classList.add("InDesign");
		habilidades [3].classList.add("Premier");
		habilidades [4].classList.add("AfterEffects");
		habilidades [5].classList.add("Puntualidad");
		habilidades [6].classList.add("Adaptabilidad");
		habilidades [7].classList.add("Creatividad");
		habilidades [8].classList.add("TrabajoenEquipo");
		habilidades [9].classList.add("Versatibilidad");
		
	}
}


window.onscroll = function(){
	efectoHabilidades();
}














