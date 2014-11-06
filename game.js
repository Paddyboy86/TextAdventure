var runSomeTests = function(){

	var descrip = document.getElementById('descrip');

	console.log( descrip.tagname );
	console.log( descrip.innerHTML );
	console.log( descrip.parentNode.tagName );

	var headings = document.querySelectorALL('aside > h1');

	for (i = 0; i < headings.length; i++){
		console.log(headings[i].innerHTML );
}

};

//window.onload = runSomeTests
