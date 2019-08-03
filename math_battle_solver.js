function math_battle_solver(maxScore){
	// Start the game
	document.getElementById("button_correct").click()
	for (i = 0; i < maxScore; i++){
		var x = document.getElementById("task_x").innerHTML;
		var y = document.getElementById("task_y").innerHTML;
		var operator = document.getElementById("task_op").innerHTML;
		var result = document.getElementById("task_res").innerHTML;
		if (operator == "×"){
			operator = "*"
		}
		else if (operator == "–"){
			operator = "-"
		}
		var expression = x + operator + y
		if (Number(result) == eval(expression)){
			document.getElementById("button_correct").click()
		}
		else{
			document.getElementById("button_wrong").click()	
		}
	}
}
