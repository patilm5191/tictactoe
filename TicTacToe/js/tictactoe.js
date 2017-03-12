var count = 0;
		function startGame()
		{
			count = 0;
			document.nextTurn = "X";
			document.getElementById("message").style.color = "black";
			setMessage("Game will start with \"" + document.nextTurn +"\"");
			document.getElementById("resetButton").innerHTML = "Reset";
		}

		function nextMove(cell) {
			if(cell.innerHTML == ""){
				if(document.nextTurn == "X"){
					cell.style.color = "#E53935";
				}
				else{
					cell.style.color = "blue";
				}
				cell.innerHTML = document.nextTurn;
				count++;
				switchTurn();
					if(count == 9){
						gameOver();
					}
				}
			else{
				setMessage("That square is already used.");
			}

		}

		function setMessage(msg) {
			document.getElementById("message").innerHTML = msg;
		}

		function switchTurn() {
			if(document.nextTurn == "X")
			{
				document.nextTurn = "O";
			}
			else{
				document.nextTurn = "X";
			}

			setMessage("Its " + document.nextTurn +"\'s turn !!!");
		}

		function viewTable() {
			var t = document.getElementById("table");
			t.style.display = "block";
			document.getElementById("startButton").style.display = "none";
		}

		function resetAll() {
			var i = 1;
			for(; i <= 9 ; i++ )
			{
				document.getElementById("td"+i).innerHTML="";
			}
			startGame();
		}

		function gameOver() {
			document.getElementById("message").style.color = "red";
			setMessage("Game Over !");
			document.getElementById("resetButton").innerHTML = "Play Again";
		}
