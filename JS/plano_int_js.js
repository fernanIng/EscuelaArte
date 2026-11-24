
const middlebar = document.getElementById('middlebar');

const panelTitle = document.getElementById("panel-tittle");
const panelDescription = document.getElementById("panel-description");
const panelImagen = document.getElementById("panel-imagen");

const zones = document.querySelectorAll('[id^="plano-"]');

const mapData = {
	"plano-nuevo-N202": {
		title: "Laboratorio de Materiales",
		description: "EDIFICIO NUEVO · PLANTA 2 · N202",
		imagen: "2x/N202-Laboratorio-materiales.png"
	},


	
	"plano-nuevo-N2031": {
		title: "Taller Conservación y Restauración 3",
		description: "EDIFICIO NUEVO · PLANTA 2 · N203",
		imagen: "2x/N203-Conservacion-Restauracion-3.png"
	},

	
	"plano-nuevo-N203": {
		title: "Taller Conservación y Restauración 3",
		description: "EDIFICIO NUEVO · PLANTA 2 · N203",
		imagen: "2x/N203-Conservacion-Restauracion-3.png"
	},


	"plano-nuevo-N2011": {
		title: "Taller Conservación y Restauración 2",
		description: "EDIFICIO NUEVO · PLANTA 2 · N201",
		imagen: "2x/N201-Conservacion-Restauracion-2.png"
	},



	"plano-nuevo-N201": {
 		title: "Taller Conservación y Restauración 2",
		description: "EDIFICIO NUEVO · PLANTA 2 · N201",
		imagen: "2x/N201-Conservacion-Restauracion-2.png"
	},


	
	"plano-nuevo-N1011": {
		title: "Taller de Pintura Sobre Vidrio",
		description: "EDIFICIO NUEVO · PLANTA 1 · N101",
		imagen: "2x/N101-Taller-Pintura-Sobre-Vidrio.png"
	},


	
	"plano-nuevo-N101": {
		title: "Taller de Pintura Sobre Vidrio",
		description: "EDIFICIO NUEVO · PLANTA 1 · N101",
		imagen: "2x/N101-Taller-Pintura-Sobre-Vidrio.png"
	},

	
	"plano-nuevo-N102": {
		title: "Maquinaria de Pintura Sobre Vidrio",
		description: "EDIFICIO NUEVO · PLANTA 1 · N102",
		imagen: "2x/N102-Maquinaria-Pintura-Sobre-Vidrio.png"
	},


	
	"plano-nuevo-N103": {
		title: "Taller Conservación y Restauración 1",
		description: "EDIFICIO NUEVO · PLANTA 1 · N103",
		imagen: "2x/N103-Taller-Conservacion-Restauracion-1.png"
	},

	"plano-nuevo-N1031": {
		title: "Taller Conservación y Restauración 1",
		description: "EDIFICIO NUEVO · PLANTA 1 · N103",
		imagen: "2x/N103-Taller-Conservacion-Restauracion-1.png"
	},

	"plano-nuevo-N1032": {
		title: "Taller Conservación y Restauración 1",
		description: "EDIFICIO NUEVO · PLANTA 1 · N103",
		imagen: "2x/N103-Taller-Conservacion-Restauracion-1.png"
	},


	
	"plano-nuevo-N001": {
		title: "Conserjería N",
		description: "EDIFICIO NUEVO · PLANTA 0 · N001",
		imagen:"2x/N001-Conserjeria-N.png"
	},


	
	"plano-nuevo-N002": {
		title: "Taller de Vidrieras",
		description: "EDIFICIO NUEVO · PLANTA 0 · N002",
		imagen:"2x/N002-Taller-vidrieras.png"
	},


	
	"plano-nuevo-N003": {
		title: "Maquinaria de vidrieras",
		description: "EDIFICIO NUEVO · PLANTA 0 · N003",
		imagen:"2x/N003-Maquinaria-vidrieras.png"
	},

	
	"plano-nuevo-N004": {
		title: "Sala de hornos de vidrieras",
		description: "EDIFICIO NUEVO · PLANTA 0 · N004",
		imagen:"2x/N004-Sala-hornos-vidrieras.png"
	},

	
	"plano-nuevo-N005": {
		title: "Sala de corte de vidrieras",
		description: "EDIFICIO NUEVO · PLANTA 0 · N005",
		imagen:"2x/N005-Sala-corte-vidrieras.png"
	},

	
	"plano-nuevo-N006": {
		title: "Aula de Conservación y Restauración",
		description: "EDIFICIO NUEVO · PLANTA 0 · N006",
		imagen:"2x/N006-Aula-Conservacion-Restauracion.png"
	},

	
	"plano-nuevo-NS01": {
		title: "Aula de Informática N",
		description: "EDIFICIO NUEVO · SOTANO · NS01",
		imagen: "2x/NS01-Aula-Informatica.png"
	},

	
	"plano-nuevo-NS02": {
		title: "Aula de Dibujo Técnico",
		description: "EDIFICIO NUEVO · SOTANO · NS02",
		imagen:"2x/NS02-Aula-Dibujo-Tecnico.png"
	},

	
	"plano-nuevo-NS03": {
		title: "Taller Dibujo C",
		description: "EDIFICIO NUEVO · SOTANO · NS03",
		imagen:"2x/NS03-Taller-Dibujo-C.png"
	},

	
	"plano-nuevo-NS04": {
		title: "Aula FOL",
		description: "EDIFICIO NUEVO · SOTANO · NS04",
		imagen:"2x/NS04-Aula-FOL.png"
	},

	"plano-antiguo-pasillo-cristal-A004": {
		title: "Aula Artes Escénicas y Música",
		description: "PASILLO DE CRISTAL · PATIO · A004",
		imagen: "2x/A004-Aula-Musica-Artes-Escenicas.png"
	},



	
	"plano-antiguo-AS01": {
		title: "Taller de Volumen",
		description: "EDIFICIO ANTIGUO · SOTANO · AS01",
		imagen: "2x/AS01-Taller-Volumen.png"
	},


	"plano-antiguo-AS02": {
		title: "Aula de Informática A",
		description: "EDIFICIO ANTIGUO · SOTANO · AS02",
		imagen: "2x/AS02-Aula-Informatica.png"
	},


	"plano-antiguo-AS03": {
		title: "Aula de Diseño",
		description: "EDIFICIO ANTIGUO · SOTANO · AS03",
		imagen: "2x/AS03-Aula-Diseno.png"
	},


	"plano-antiguo-AS04": {
		title: "Sala de Profesores",
		description: "EDIFICIO ANTIGUO · SOTANO · AS04",
		imagen: "2x/AS04-Sala-Profesores.png"
	},


	"plano-antiguo-AS05": {
		title: "Aula de Fotografía",
		description: "EDIFICIO ANTIGUO · SOTANO · AS05",
		imagen: "2x/AS05-Aula-Fotografia.png"
	},


	"plano-antiguo-AS06": {
		title: "Plató Fotografía",
		description: "EDIFICIO ANTIGUO · SOTANO · AS06",
		imagen: "2x/AS06-Plato-Fotografia.png"
	}, 


	"plano-antiguo-AS07": {
		title: "Laboratorio de Fotografía",
		description: "EDIFICIO ANTIGUO · SOTANO · AS07",
		imagen: "2x/AS07-Laboratorio-fotografia.png"
	},


	"plano-antiguo-A001": {
		title: "Taller de Grabado",
		description:"EDIFICIO ANTIGUO · PLANTA 0 · A001",
		imagen: "2x/A001-Taller-Grabado.png"
	},

	"plano-antiguo-A002": {
		title: "Taller de Litografía",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A002",
		imagen: "2x/A002-Taller-Litografia.png"
	},

	"plano-antiguo-A005": {
		title: "Aula de Proyectos",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A005",
		imagen:"2x/A005-Aula-Proyectos.png"
	}, 

	"plano-antiguo-A006": { 
		title: "Sala de Exposiciones",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A006",
		imagen: "2x/A006-Sala-Exposiciones.png"
	},

	"plano-antiguo-A007": {
		title: "Taller de Serigrafía",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A007",
		imagen: "2x/A007-Taller-Serigrafia.png"
	},

	"plano-antiguo-A008": {
		title: "Conserjería A",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A008",
		imagen: "2x/A008-Conserjeria-A.png"
	},

	"plano-antiguo-A009": {
		title: "Jefatura de Estudios",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A009",
		imagen: "2x/A009-Jefatura-Estudios.png"
	},

	"plano-antiguo-A010": {
		title: "Dirección",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A010",
		imagen:"2x/A010-Direccion.png"
	},

	"plano-antiguo-A011": {
		title: "Secretaría",
		description: "EDIFICIO ANTIGUO · PLANTA 0 · A011",
		imagen:"2x/A011-Secretaria.png"
	},

	"plano-antiguo-A101": {
		title: "Taller Dibujo A",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A101",
		imagen: "2x/A101-Taller-Dibujo-A.png"
	},


	"plano-antiguo-A102": {
		title: "Taller de Tapices y Alfombras",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A102",
		imagen: "2x/A102-Taller-Tapices-Alfombras.png"
	},


	"plano-antiguo-A103": {
		title: "Taller de Tintes",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A103",
		imagen: "2x/A103-Taller-Tintes.png"
	},


	"plano-antiguo-A104": {
		title: "Taller Estampación Textil",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A104",
		imagen: "2x/A104-Taller-Estampacion-Textil.png"
	},


	"plano-antiguo-A105": {
		title: "Taller Arte Textil",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A105",
		imagen: "2x/A105-Taller-Arte-Textil.png"
	},


	"plano-antiguo-A106": {
		title: "Biblioteca",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A106",
		imagen:"2x/A106-Biblioteca.png"
	},


	"plano-antiguo-A107": {
		title: "Taller Dibujo Bachillerato",
		description: "EDIFICIO ANTIGUO · PLANTA 1 · A107",
		imagen: "2x/A107-Taller-Dibujo-Bachillerato.png"
	},


	"plano-antiguo-A201": {
		title: "Aula Múltiple A",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A201",
		imagen: "2x/A201-Aula-multiple-A.png"
	},


	"plano-antiguo-A202": {
		title: "Aula Múltiple B",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A202",
		imagen: "2x/A202-Aula-multiple-B.png"
	},


	"plano-antiguo-A203": {
		title: "Aula Múltiple C",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A203",
		imagen: "2x/A203-Aula-multiple-C.png"
	},


	"plano-antiguo-A204": {
		title: "Aula Múltiple D",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A204",
		imagen: "2x/A204-Aula-multiple-D.png"
	},


	"plano-antiguo-A205": {
		title: "Aula Múltiple E",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A205",
		imagen: "2x/A205-Aula-multiple-E.png"
	},


	"plano-antiguo-A206": {
		title: "Aula Múltiple F",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A206",
		imagen: "2x/A206-Aula-multiple-F.png"
	},


	"plano-antiguo-A207": {
		title: "Taller Bajo Lizo",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A207",
		imagen: "2x/A207-Taller-Bajo-Lizo.png"
	},


	"plano-antiguo-A208": {
		title: "Aula Múltiple G",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A208",
		imagen: "2x/A208-Aula-multiple-G.png"
	},


	"plano-antiguo-A209": {
		title: "Aula Múltiple H",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A209",
		imagen: "2x/A209-Aula-multiple-H.png"
	},


	"plano-antiguo-A210": {
		title: "Taller de Audiovisuales",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A210",
		imagen: "2x/A210-Taller-AudioVisuales.png"
	},


	"plano-antiguo-A211": {
		title: "Departamento de Bachillerato",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A211",
		imagen: "2x/A211-Departamento-Bachillerato.png"
	},


	"plano-antiguo-A212": {
		title: "Departamento de Orientación",
		description: "EDIFICIO ANTIGUO · PLANTA 2 · A212",
		imagen: "2x/A212-Departamento-Orientacion.png"
	},

	"plano-antiguo-pasillo-cristal": {
		title: "Pasillo de Cristal",
		description: "Por donde pasa la luz y todas las personas para ir del edificio Antiguo al Nuevo y viceversa.",
		imagen: "2x/pasillo-cristal.png"
	},

	"plano-antiguo-pasillo-cristal-A003": {
		title: "Patio",
		description: "PASILLO DE CRISTAL · PATIO · A003 Necesario pasar por el Patio para acceder al Aula de Música y Artes Escénicas",
		imagen: "2x/patio.png"
	},

	"plano-antiguo-puerta-A-principal": {
		title: "EDIFICIO ANTIGUO",
		description: "Puerta de acceso más cercana a la Catedral. Acceso abierto por la mañana y por la tarde",
		imagen: "2x/edificio-antiguo.png"
	},

	"plano-antiguo-nombre-edificioAntiguo": {
		title: "EDIFICIO ANTIGUO",
		description: "Antiguo edificio de la Real Sociedad Económica de Amigos del País de León. Calle Pablo Flórez 4",
		imagen: "2x/edificio-antiguo.png"
	},

	"plano-nuevo-puerta-N-principal": {
		title: "EDIFICIO NUEVO",
		description: "Puerta de acceso más cercana al parking San Pedro. Solo abierto por las mañanas",
		imagen: "2x/edificio-nuevo.png"
	},

	"plano-nuevo-nombre-edificioNuevo": {
		title: "EDIFICIO NUEVO",
		description: "Antigua sede de la Escuela Oficial de Idiomas de León. Calle Cardenal Landázuri 9",
		imagen: "2x/edificio-nuevo.png"
	}
};

zones.forEach(function(zone) {
	zone.addEventListener("click", function() {
		const zoneId = zone.id;
		const data = mapData[zoneId];
		if (!data) {
			return;
		}
		panelTitle.textContent = data.title;
		panelDescription.textContent = data.description;
		panelImagen.src = data.imagen;
		middlebar.classList.add("open");
	});
});


const closeButton = document.getElementById("close-panel");

if (closeButton) {
	closeButton.addEventListener("click", function () {
		middlebar.classList.remove("open");
	}) 
}
