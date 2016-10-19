class Table {
	constructor(sideSquares){
		var sq = sideSquares;
		var size = 50;
		var wt = sq*size;
		document.getElementById("table").innerHTML += `<table border="0" cellspacing="2" bgcolor="black" width="${wt}">`;
		for (j=0;j<sq;j++) {
			document.getElementById("table").innerHTML += `<tr bgcolor="white" height="${size}">`;
			document.getElementById("table").innerHTML += `<td>${j}</td>`;
			document.getElementById("table").innerHTML += `<td>``</td>`;
			document.getElementById("table").innerHTML += `</tr>`;
		}
		document.getElementById("table").innerHTML += `</table>`;
	}
}
var t = new Table;
t.constructor(5);