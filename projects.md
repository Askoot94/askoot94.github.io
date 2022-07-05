<!DOCTYPE html>
<html>
<head>
<style type="text/css">
	body{
		margin: 0px;
		background-color: lightgrey;
	}
	/* This is the layout for the website*/
	.header{
		padding: 5px;
		background-color: grey;
		text-align: center;
	}
	.navigation{
		overflow: hidden;
		background-color: #333;
	}
	.column{
		float: left;
		padding: 0px;
	}
	.column.right{
		width: 24%;
		background-color: lightgrey;
		height: 100%;
	}
	.column.main{
		width: 76%;
		background-color: whitesmoke;
		height: 1800px;
	}
	.row:after {
	content: "";
	display: table;
	clear: both;
	}
	/* This is the unordered list that will access navigation */
	ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		position: sticky;
		top: 0;
		width: 285px;
	}
	li{
		float: left;
	}
	li a {
		display: block;
		padding: 14px 16px;
		text-align: center;
		border-right: 1px solid white;
	}
	li a:hover:not(.active) {
		background-color: #111;
	}
	.active{
		background-color: purple;
	}

	/*This is the navigation bar that will appear*/
	#navigationBar{
		list-style-type: none;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		background-color: #333;
	}
	#side-menu{
		font-size: 20px;
		padding: 8px;
		text-anchor: center;
		background-color: ghostwhite;
		border: solid 2px black;
		display: none;
		position: relative;
		top: 1px;
	}
	#hideButton{
		color: red;
		text-align: center;
		padding: 8px;
		background-color: black;
		border: solid 2px black;
		display: none;
		font-size: 20px;
		width: 45px;
		cursor: pointer;
	}
	#showButton{
		font-size: 20px;
		padding: 8px;
		text-anchor: center;
		background-color: ghostwhite;
		border: solid 2px black;
		display: inline-block;
		width: 45px;
		cursor: pointer;
	}

	.eyeFrames{
		border: 2px;
		resize: vertical;
		overflow: hidden;
	}

	/* This is where all the text is styled*/
	#mainHeader{
		font-size: 35px;
		color: purple;
	}
	.basicText{
		font-size: 20px;
		text-align: left;
	}


</style>

<script>
function showMenu(){
	document.getElementById('side-menu').style.display = "inline-block";
}
function hideMenu(){
	document.getElementById("side-menu").style.display = "none";
}
function showHideButton(){
	document.getElementById("hideButton").style.display = "inline-block";
}
function hideHideButton(){
	document.getElementById("hideButton").style.display = "none";
}
function showShowButton(){
	document.getElementById("showButton").style.display = "inline-block";
}
function hideShowButton(){
	document.getElementById("showButton").style.display = "none";
}
</script>

<title>This is the Website Title</title>

</head>

<body>

<!-- This is the test area. Text coding goes here> -->
<!-- What IF I had a div element that was above everyting else and that is where the side bar menu is stored, I need to try and experiment with the z-index to make it disappear behind everything-->

<div class="header">
	<h id="mainHeader"> Projects (md)</h>
</div>			
<div class="row">
	<div class="navigation">
		<ul id=navigationBar>
			<li><a class="active" href="askoot94.github.io">Main</a></li>
			<li><a href="#info">Info</a></li>
			<li><a href="#new">New</a></li>
			<li><a href="#last">Last</a></li>

		</ul>
	</div>
	<div class="column main">
		<ul>
			<li id="hideButton" onClick="hideMenu() + showShowButton() + hideHideButton()">Close</li>
			<li id="showButton" onclick="showMenu() + showHideButton() + hideShowButton()">Open</li>
				<div id="side-menu">
					<p>Insert Link</p>
					<p>Insert Link2</p>
					<p>Insert Java Script for Dark Mode</p>
					<p>Insert Search Bar</p>
				</div>
		</ul>
		<p class="basicText">
			This middle section here should contain links to all my projects. They will be formated to look like twitter posts with an 256 x 256 pixel image/logo and a 16 size font title and 12 size description, when you click on the title it shoud act as a link and send you to that projects dedicated webpage.
		</p>
		<br><br>
		<p>
			For additional notice, the webpages dedicated to individual projects should possess a wwebsite layout unique to projects. Formatting should be similiar to newgrounds' layout when playing games and watching movies. A link to project documentation should be provided with a blog spot that contains the details of all the processes and changes made with timestamps to know when, what was added. This blog spot could be a drop down menu <!-- F95 Changelog --> or just another website page. 
		</p>
	</div>

	<div class="column right">
		<div>
			<p class="basicText">
				On the Side bar here, updates to the website should be publised, alternativly there could be some links to contact me via: email, Discord, and social media. Unfortunetly I don't have any social medias so maybe a link to my Github account? Updates should come in blog posts and will have the changes specified in the Github repository as the header with unique information in the body. The blog posts will also be timestamped with date, month, and year. <!-- Check out mantis-X's site for a template --> To make this process easier, I could create a normally in-accessible website page that contains all the blog posts links and in this side bar, put an eyeFrame that will load all the links and posts, this way I won't have to change the information contained in the sidebar for <i>ALL</i> of my individual webpages.
		</div>
	</div>
</div>

</body>
</html>
