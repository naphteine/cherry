(function() {
	"use strict";

	let canvas = document.getElementById("mainCanvas");
	let ctx = canvas.getContext("2d");

	let status = "stopped";
	let lastStatus = "tomato";
	let tomato = 0;
	let tomatoBreak = 0;
	let tomatoMinute = 25;
	let breaks = 0;
	let breakMinute = 5;

	let timer = 0;
	let timerMinute = 0;

	let button = {
		text: status,
		x: 50, y: 50,
		width: 400, height: 250,
		color: "red"
	};

	let insideRect = function(x, y, rect) {
		return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
	}

	canvas.addEventListener("click", function(e) {
		let mX = e.clientX;
		let mY = e.clientY;

		if (insideRect(mX, mY, button)) {
			if (status == "stopped") {
				status = lastStatus;

				if (status == "tomato") button.color = "blue";
				else if (status == "break") button.color = "green";
			} else {
				lastStatus = status;
				status = "stopped";
				button.color = "red";
			}
		}
	})


	setInterval(function() {
		canvas.width = (window.innerWidth > 320) ? window.innerWidth : 320;
		canvas.height = (window.innerHeight > 320) ? window.innerHeight : 320;

		button.x = (canvas.width - button.width) / 2;
		button.y = (canvas.height - button.height) / 2;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = button.color;
		ctx.beginPath();
		ctx.fillRect(button.x, button.y, button.width, button.height);
		ctx.stroke();
		ctx.font = "24px serif";

		if (status == "break") {
			ctx.strokeText(status, button.x + 5, button.y + button.height/2);
			ctx.strokeText(timerMinute + ":" + timer + "/" + breakMinute + ":00", button.x + 5, button.y + button.height/2 + 25);
		} else if (status == "tomato") {
			ctx.strokeText(status, button.x + 5, button.y + button.height/2);
			ctx.strokeText(timerMinute + ":" + timer + "/" + tomatoMinute + ":00", button.x + 5, button.y + button.height/2 + 25);
		} else {
			ctx.strokeText(lastStatus + " " + status, button.x + 5, button.y + button.height/2);
			ctx.strokeText(timerMinute + ":" + timer, button.x + 5, button.y + button.height/2 + 25);
		}

		ctx.strokeText("tomatos: " + tomato + " / breaks: " + breaks, button.x + 5, button.y + button.height/2 + 50);
	}, 10)

	setInterval(function() {
		if (status != "stopped") {
			timer++;

			if (timer >= 59) {
				timerMinute++;
				timer = 0;
			}

			if (status == "tomato") {
				button.color = "blue";

				if (timerMinute >= tomatoMinute) {
					tomato++;
					timerMinute = 0;
					timer = 0;
					status = "break";
					button.color = "green";
				}
			} else if (status == "break") {
				button.color = "green";

				if (timerMinute >= breakMinute) {
					breaks++;
					timerMinute = 0;
					timer = 0;
					status = "tomato";
					button.color = "blue";
				}
			}
		}
	}, 1000)
}());
