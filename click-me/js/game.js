function buttonClicked(){
	let scoreElement = document.getElementById("Score");
	if(document.cookie=""){
		document.cookie="Score=1";
		return;
	}
	let score = parseInt(document.cookie.replace('Score=', ''))+1;
	document.cookie = "Score="+score;
	scoreElement.innerHTML = document.cookie;
}
