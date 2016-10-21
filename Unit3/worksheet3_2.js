class Table {
	constructor(){
		var tab = `<table border="0" cellspacing="2" bgcolor="black" width="300">`;
		for (var j=0;j<3;j++) {
			tab += `<tr bgcolor="white" height="100">`;
			for (var i=0;i<3;i++) {
				tab +=`<td id=${j}.${i} width="100"></td>`;
			}
			tab += `</tr>`;
		}
		tab += `</table>`
		document.getElementById("table").innerHTML = tab;

		for (var a=0;a<3;a++) {
			for (var b=0;b<3;b++) {
				document.getElementById(`${a}.${b}`).addEventListener("click", function() {document.getElementById(`${a}.${b}`).innerHTML = "Hello World";
				});
			}
		}		
	}
}

window.onload = function() {
	new Table();
}



class Tablero {
	constructor() {
		var celdas = [["","",""], ["","",""], ["","",""]];
	}
	colocarFicha(pos, ficha) {
		this.pos = pos;
		this.ficha = ficha;
		celdas[this.pos] = this.ficha;
	}
}

class Jugador {
	constructor(ficha) {
		this.ficha = ficha;
	}
	get ficha() {
		return this.ficha;
	}
}

