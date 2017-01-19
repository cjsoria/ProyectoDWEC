class RandomBall {
	constructor() {
		this.cy = 440;
		this.cx = 320;
		this.buildBall();
	}

	buildBall() {
		this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			document.getElementById("camp").appendChild(this.circle);
		this.circle.setAttribute("cy", "440");
		this.circle.setAttribute("cx", "320");
		this.circle.setAttribute("r", "5");
		this.circle.setAttribute("fill", "black");
	}
}

class Game {
	constructor() {
		this.camp();
		this.start();
		this.ball = new RandomBall();
		this.loop();
	}

	camp() {
		this.svg = document.createElementNS("http://www.w3.org/2000/svg", 
			"svg");
		document.body.appendChild(this.svg);
		this.svg.setAttribute("id", "camp");
		this.svg.setAttribute("height", "480");
		this.svg.setAttribute("width", "640");
		this.svg.style.backgroundColor = "grey";
	}

	move(that) {
		that.ball.cy--;
		that.ball.cx++;
		that.ball.circle.setAttribute("cy", `${that.ball.cy}`);
		that.ball.circle.setAttribute("cx", `${that.ball.cx}`);
	}

	loop() {
		var that = this;
		this.inte = setInterval(()=>this.move(that), 25);
	}

	start() {
		if (!(document.getElementById("camp"))) {
			g = new Game();
		}
	}

	stop() {
		clearInterval(this.inte);
	}
}

window.onload = function() {
	var buttom = document.getElementsByTagName("button");
	buttom[0].addEventListener("click", function() {
		if (!(document.getElementById("camp"))) {
			g = new Game();
		}
	});
	buttom[1].addEventListener("click", function() {
		document.getElementById("camp").remove();
		g = new Game();
	});
	buttom[2].addEventListener("click", function() {g.stop()});
}
