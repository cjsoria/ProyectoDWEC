function clic() {
	alert("Has clickeado");
}

function posicion() {
	window.addEventListener("mousemove", function(e){
		var x = e.screenX;
		var y = e.screenY;
		var coor = "Coordenadas: (" + x + ", " + y + ")";
		document.getElementById("pos").innerHTML = coor;
	});
}

function tabla() {
	var tab = `<table id="tabl">`;
	for (j=0;j<100;j++) {
		tab += `<tr>`;
		for (i=0;i<100;i++) { 
			tab += `<td id=${j}.${i}></td>`;
		}
		tab += `</tr>`;
	}
	tab += `</table>`;
	document.getElementById("tabla").innerHTML = tab;
}

function dibujar() {
	tabla();
	for (j=0;j<100;j++) {
		for (i=0;i<100;i++){
			document.getElementById(`${j}.${i}`).addEventListener("mousemove", function(e){
				if (e.ctrlKey) {
					e.target.style.backgroundColor="red";
				}
				else if (e.shiftKey) {
					e.target.style.backgroundColor="blue";
				}
				else if (e.altKey) {
					e.target.style.backgroundColor="white";
				}
			});
		}
	}
	document.getElementById("clear").addEventListener("click", function(e){
		for (j=0;j<100;j++) {
			for (i=0;i<100;i++){
				document.getElementById(`${j}.${i}`).style.backgroundColor="white";
			}
		}
	});
}

window.onload = function() {
	posicion();
	dibujar();
}