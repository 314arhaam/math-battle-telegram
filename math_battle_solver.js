function solve() {
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
	return Number(result) == eval(expression)
}

function main(maxScore, terminate = false) {
	document.getElementById("button_correct").click()
	for (i = 0; i < maxScore; i++){
		if (solve()){
			document.getElementById("button_correct").click()
		}
		else{
			document.getElementById("button_wrong").click()	
		}
	}
	if (terminate == true){
		for (i = 0; i < 3; i++){
			if (!solve()){
				document.getElementById("button_correct").click()
			}
			else{
				document.getElementById("button_wrong").click()	
			}
		}
	}
}
