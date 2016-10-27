class Vista {
	constructor(controlador){
		this.controlador = controlador;
		var tab = `<table border="0" cellspacing="2" bgcolor="black" width="600">`;
		for (var j=0; j<3; j++) {
			tab += `<tr bgcolor="grey" height="200">`;
			for (var i=0; i<3;i ++) {
				tab +=`<td id=${j}.${i} width="200"></td>`;
			}
			tab += `</tr>`;
		}
		tab += `</table>`
		document.getElementById("table").innerHTML = tab;
		this.listener();
	}

	evento(e) {
		var pos = e.target.getAttribute("id").split(".");
		this.controlador.insertarFicha(pos[0], pos[1]);
	}

	listener() {
		for (var a=0; a<3; a++) {
			for (var b=0; b<3; b++) {
				document.getElementById(`${a}.${b}`).addEventListener("click", (e)=>this.evento(e));	
			};			
		}
	}

	mostrarFicha(fila, columna, ficha) {
		document.getElementById(`${fila}.${columna}`).innerHTML = ficha;								
	}
}

class Tablero {
	constructor() {
		this.celdas = [["","",""], ["","",""], ["","",""]];
	}

	comprobarGanador() {
		return this.comprobarGanadorH() || this.comprobarGanadorV() || this.comprobarGanadorD1() || this.comprobarGanadorD2();
	}

	colocarFicha(fila, columna, ficha) {
		this.celdas[fila][columna] = ficha;
	}

	comprobarCasilla(fila, columna) {
		if (this.celdas[fila][columna] == ""){
			return true;
		}
		else {
			return false;
		}
	}

	comprobarGanadorH() {
		for (var i=0; i<3; i++){
			if (this.celdas[i][0] == this.celdas[i][1] && this.celdas[i][1] == this.celdas[i][2] && this.celdas[i][0] != ""){
				return true;
			}
			else {
				return false;
			}
		}
	}

	comprobarGanadorV() {
		for (var i=0; i<3; i++){
			if (this.celdas[0][i] == this.celdas[1][i] && this.celdas[1][i] == this.celdas[2][i] && this.celdas[0][i] != ""){
				return true;
			}
			else {
				return false;
			}
		}
	}

	comprobarGanadorD1() {
		if (this.celdas[0][0] == this.celdas[1][1] && this.celdas[1][1] == this.celdas[2][2] && this.celdas[0][0] != ""){
			return true;
		}
		else {
			return false;
		}
	}

	comprobarGanadorD2() {
		if (this.celdas[0][2] == this.celdas[1][1] && this.celdas[1][1] == this.celdas[2][0] && this.celdas[0][2] != ""){
			return true;
		}
		else {
			return false;
		}
	}
}

class Jugador {
	constructor(ficha) {
		this.ficha = ficha;
	}
}

class Modelo {
	constructor() {
		this.t = new Tablero();
		this.j = [new Jugador("X"), new Jugador("O")];
	}
}

class Controlador {
	constructor() {
		this.v = new Vista(this);
		this.m = new Modelo();
		this.numTurno = 0
	}

	insertarFicha(fila, columna) {
		if (this.m.t.comprobarCasilla(fila, columna)){
			this.m.t.colocarFicha(fila, columna, this.m.j[this.numTurno].ficha);
			this.v.mostrarFicha(fila, columna, this.m.j[this.numTurno].ficha);
			if (this.m.t.comprobarGanador()){
			alert("GANADOR");
			}
			this.turno();
		}
		
	}
	turno() {
		if (this.numTurno == 0){
			this.numTurno = 1;
		}
		else {
			this.numTurno = 0;
		}
	}
}

window.onload = function() {
		c = new Controlador();
}	