function buttonClicked(){
	let scoreElement = document.getElementById("score");
	if(document.cookie=""){
		document.cookie="score=1";
		return;
	}
	let score = parseInt(document.cookie.replace('score=', ''))+1;
	document.cookie = "score="+score;
	scoreElement.innerHTML = document.cookie;
}
