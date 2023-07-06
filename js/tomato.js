(function () {
  "use strict";

  

  // let canvas = document.getElementById("mainCanvas");
  // let ctx = canvas.getContext("2d");

  // let status = "stopped";
  // let lastStatus = "tomato";
  // let tomatoCounter = 0;
  // let tomatoMinute = 25;
  // let breakCounter = 0;
  // let breakMinute = 5;

  // let timer = 0;
  // let timerMinute = 0;
  // let color = "red";

  // let interval = 1000;
  // let expected = Date.now() + interval;

  // const changeStatus = function(newStatus) {
  // 	status = newStatus;

  // 	switch (newStatus) {
  // 		case "tomato":
  // 			color = "blue";
  // 			break;
  // 		case "break":
  // 			color = "green";
  // 			break;
  // 		default:
  // 			color = "red";
  // 			break;
  // 	}
  // };

  // canvas.addEventListener("click", function() {
  // 	if (status == "stopped") {
  // 		changeStatus(lastStatus);
  // 	} else {
  // 		lastStatus = status;
  // 		changeStatus("stopped");
  // 	}
  // })

  // setInterval(function() {
  // 	canvas.width = window.innerWidth;
  // 	canvas.height = window.innerHeight;

  // 	ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 	ctx.fillStyle = color;
  // 	ctx.beginPath();
  // 	ctx.fillRect(0, 0, canvas.width, canvas.height);
  // 	ctx.stroke();
  // 	ctx.font = "24px serif";
  // 	ctx.textBaseline = "middle";
  // 	ctx.textAlign = "center";

  // 	let statusText, timerText;

  // 	if (status == "break") {
  // 		statusText = status;
  // 		timerText = timerMinute + ":" + timer + "/" + breakMinute + ":00";
  // 	} else if (status == "tomato") {
  // 		statusText = status;
  // 		timerText = timerMinute + ":" + timer + "/" + tomatoMinute + ":00";
  // 	} else {
  // 		statusText = lastStatus + " " + status;

  // 		if (lastStatus == "break") {
  // 			timerText = timerMinute + ":" + timer + "/" + breakMinute + ":00";
  // 		} else {
  // 			timerText = timerMinute + ":" + timer + "/" + tomatoMinute + ":00";
  // 		}
  // 	}

  // 	ctx.fillStyle = "white";
  // 	ctx.fillText(statusText, canvas.width / 2, canvas.height / 2);
  // 	ctx.fillText(timerText, canvas.width / 2, canvas.height / 2 + 25);
  // 	ctx.fillText("tomatos: " + tomatoCounter + " / breaks: " + breakCounter, canvas.width / 2, canvas.height / 2 + 50);

  // 	document.title = timerText + " - " + statusText;
  // }, 10)

  // const step = function() {
  // 	let dt = Date.now() - expected;
  // 	if (dt > interval) {
  // 		// SNAFU
  // 	}

  // 	if (status != "stopped") {
  // 		timer++;

  // 		if (timer > 59) {
  // 			if (status == "tomato" && timerMinute + 1 >= tomatoMinute) {
  // 				tomatoCounter++;
  // 				timerMinute = 0;
  // 				changeStatus("break");
  // 			} else if (status == "break" && timerMinute + 1 >= breakMinute) {
  // 				breakCounter++;
  // 				timerMinute = 0;
  // 				changeStatus("tomato");
  // 			} else {
  // 				timerMinute++;
  // 			}

  // 			timer = 0;
  // 		}
  // 	}

  // 	expected += interval;
  // 	setTimeout(step, Math.max(0, interval - dt));
  // };

  // setTimeout(step, interval);
})();
