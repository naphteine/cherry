(function() {
	"use strict";

	let canvas = document.getElementById("mainCanvas");
	let ctx = canvas.getContext("2d");

	let status = "stopped";
	let lastStatus = "tomato";
	let tomato = 0;
	let tomatoMinute = 25;
	let breaks = 0;
	let breakMinute = 5;

	let timer = 0;
	let timerMinute = 0;
	let color = "red";

	const changeStatus = function(newStatus) {
		status = newStatus;

		switch (newStatus) {
			case "tomato":
				color = "blue";
				break;
			case "break":
				color = "green";
				break;
			default:
				color = "red";
				break;
		}
	};

	canvas.addEventListener("click", function() {
		if (status == "stopped") {
			changeStatus(lastStatus);
		} else {
			lastStatus = status;
			changeStatus("stopped");
		}
	})


	setInterval(function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.stroke();
		ctx.font = "24px serif";

		let statusText, timerText;

		if (status == "break") {
			statusText = status;
			timerText = timerMinute + ":" + timer + "/" + breakMinute + ":00";
		} else if (status == "tomato") {
			statusText = status;
			timerText = timerMinute + ":" + timer + "/" + tomatoMinute + ":00";
		} else {
			statusText = lastStatus + " " + status;

			if (lastStatus == "break") {
				timerText = timerMinute + ":" + timer + "/" + breakMinute + ":00";
			} else {
				timerText = timerMinute + ":" + timer + "/" + tomatoMinute + ":00";
			}
		}

		ctx.strokeText(statusText, canvas.width / 2 - 100, canvas.height / 2);
		ctx.strokeText(timerText, canvas.width / 2 - 100, canvas.height / 2 + 25);
		ctx.strokeText("tomatos: " + tomato + " / breaks: " + breaks, canvas.width / 2 - 100, canvas.height / 2 + 50);
	}, 10)

	setInterval(function() {
		if (status != "stopped") {
			timer++;

			if (timer >= 59) {
				timerMinute++;
				timer = 0;
			}

			if (status == "tomato" && timerMinute >= tomatoMinute) {
				tomato++;
				timerMinute = 0;
				timer = 0;
				changeStatus("break");
			} else if (status == "break" && timerMinute >= breakMinute) {
				breaks++;
				timerMinute = 0;
				timer = 0;
				changeStatus("tomato");
			}
		}
	}, 1000)
}());
