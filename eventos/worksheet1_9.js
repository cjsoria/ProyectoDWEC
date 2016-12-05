function mover(e) {
	var newX = e.clientX - 10;
	var newY = e.clientY - 10;

	imagen.style.left = newX + "px";
	imagen.style.top = newY + "px";
}

function clickInicial(e) {
	var imagen;
	var pic = document.getElementById("pic");
	var moviendo = false;

	pic.addEventListener("mousedown", clickInicial, false);

	if (moviendo) {
		document.removeEventListener("mousemove", mover, false);
		moviendo = !moviendo;
		return;
	}

	moviendo = !moviendo;
	imagen = this;

	document.addEventListener("mousemove", mover, false);
}

window.onload = function() {
	clickInicial();
}