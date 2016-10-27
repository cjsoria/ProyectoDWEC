class Vista {
	constructor(controlador){
		this.controlador = controlador;
		var tab = `<table border="0" cellspacing="2" bgcolor="white" width="600">`;
		for (var j=0; j<4; j++) {
			tab += `<tr bgcolor="grey" height="150">`;
			for (var i=0; i<4;i ++) {
				tab +=`<td style='background-repeat: no-repeat;\ 
				background-position: -${150*i}px -${150*j}px;\
				background-size: 600px 600px; \
				background-image: url("img.jpg");' \
				width="150"\
				id="${j}.${i}" ></td>`;
			}
			tab += `</tr>`;
		}
		tab += `</table>`
		document.getElementById("table").innerHTML = tab;
		document.getElementById("3.3").style.backgroundImage = "url()";
	}
}

class Tablero {
	constructor() {
		this.celdas = [	["0.0","0.1","0.2","0.3"], 
						["1.0","1.1","1.2","1.3"], 
						["2.0","2.1","2.2","2.3"], 
						["3.0","3.1","3.2",""	]];
	}
}


class Modelo {
	constructor() {
		this.t = new Tablero();
	}
}

class Controlador {
	constructor() {
		this.v = new Vista(this);
		this.m = new Modelo();
	}
}

window.onload = function() {
		c = new Controlador();
}	