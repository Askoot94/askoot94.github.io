function showMenu(){
		document.getElementById('side-menu').style.display = "inline-block";
		document.getElementById("hideButton").style.display = "inline-block";
		document.getElementById("showButton").style.display = "none";
	};
function hideMenu(){
	document.getElementById("side-menu").style.display = "none";
	document.getElementById("hideButton").style.display = "none";
	document.getElementById("showButton").style.display = "inline-block";
};
function showQuote(){
	console.log("Showing Quote.");
	alert("Death is not the greatest loss in life. The greatest loss is what dies inside us while we live. -- Norman Cousins");
}