
var uselected = '0';
var iselected = '0';
var cselected = '0';

function show_icon (msg, min, max, selected, iconname) {
	if (document.getElementById) {
		var clicked = "t" + selected;
		var tagicon = iconname + ".jpg"; ;
		iselected = clicked;


		document.getElementById('tagicon').src = "/gfx/" + tagicon  ;

		document.getElementById('ti').value = selected  ;
		document.getElementById('tit').value = 0  ;

		//persists icon/color selection between iconset pages
		document.getElementById('pti').value = selected  ;
		document.getElementById('ptit').value = 0  ;

		for( i = min; i <= max ; i++ ){
			var id = "t" + i;
			document.getElementById(id).style.border = "2px solid #dddddd"  ;
		}
		document.getElementById(clicked).style.border = "2px solid #ff0000"  ;
		if( uselected != '0' ) {
			document.getElementById(uselected).style.border = "2px solid #dddddd"  ;
		}
		return false;
	} else {
		return true;
	}
}

function show_user_icon (min, max, selected, iconname, mark) {
	if (document.getElementById) {
		var clicked = "u" + selected;
		var tagicon = iconname + ".jpg"; ;
		uselected = clicked;


		document.getElementById('tagicon').src = "/gfx/" + tagicon  ;

		document.getElementById('ti').value = mark  ;
		document.getElementById('tit').value = 1  ;

		//persists icon/color selection between iconset pages
		document.getElementById('pti').value = mark  ;
		document.getElementById('ptit').value = 1  ;

		for( i = min; i < max ; i++ ){
			var id_i = i+1;
			var id = "u" + id_i;
			document.getElementById(id).style.border = "2px solid #dddddd"  ;
		}
		document.getElementById(clicked).style.border = "2px solid #ff0000"  ;
		if( iselected != '0' ) {
			document.getElementById(iselected).style.border = "2px solid #dddddd"  ;
		}
		return false;
	} else {
		return true;
	}
}

function showcolor (tagcolor, count, selected, page) {
	if (document.getElementById) {
		var color = selected.name;
		var msg = selected.title;
		var clicked = "c" + selected;

		document.getElementById('tagbottom').style.background = tagcolor  ;
		document.getElementById('tagside').style.background = tagcolor  ;
		
		document.getElementById('tc').value = tagcolor  ;

		//persists icon/color selection between iconset pages
		document.getElementById('ptc').value = tagcolor.substring(1);

		/*
		for( i = 0; i < count ; i++ ){
			var id_i = i+1;
			var id = "c" + id_i;
			document.getElementById(id).style.border = "2px solid #dddddd"  ;
		}
		*/
		document.getElementById(clicked).style.border =  "2px solid #ff0000"  ;
		if( cselected != '0' ) {
			document.getElementById(cselected).style.border = "2px outset #cccccc"  ;
		}
		cselected = clicked;
		return false;
	} else {
		return true;
	}
}


function resetcolor () {
	document.getElementById('colorerror').childNodes[0].nodeValue = " " ;
	document.getElementById('colormarker').style.border = "1px solid #eeeeee" ;
}

function verify_color (r, g, b) {
	validchar = '0123456789ABCDEF';	

	if( r.length != 2 ) { return 1; }
	if( g.length != 2 ) { return 2; }
	if( b.length != 2 ) { return 3; }

	var r = r.toUpperCase();
	var g = g.toUpperCase();
	var b = b.toUpperCase();

	if (validchar.indexOf(r.charAt(0))<0) { return 4; }
	if (validchar.indexOf(r.charAt(1))<0) { return 4; }

	if (validchar.indexOf(g.charAt(0))<0) { return 5; }
	if (validchar.indexOf(g.charAt(1))<0) { return 5; }

	if (validchar.indexOf(b.charAt(0))<0) { return 6; }
	if (validchar.indexOf(b.charAt(1))<0) { return 6; }

	return 0;
}

function customcolor () {
	if (document.getElementById) {

		var r = document.getElementById('red');
		var g = document.getElementById('green');
		var b = document.getElementById('blue');

		var errorcode =  verify_color(r.value, g.value, b.value); 
		if( errorcode > 0 ) { 
			document.getElementById('colorerror').childNodes[0].nodeValue = "Invalid Color Code" ;
			document.getElementById('colormarker').style.border = "1px solid #ff0000" ;
			return false;
		}else{
			document.getElementById('colorerror').childNodes[0].nodeValue = " " ;
			document.getElementById('colormarker').style.border = "1px solid #eeeeee" ;
		}

		var tagcolor = "#" + r.value + g.value + b.value;

		document.getElementById('tagbottom').style.background = tagcolor  ;
		document.getElementById('tagside').style.background = tagcolor  ;
		
		document.getElementById('tc').value = tagcolor  ;

		//persists icon/color selection between iconset pages
		document.getElementById('ptc').value = tagcolor.substring(1);

		/*
		for( i = 0; i < count ; i++ ){
			var id_i = i+1;
			var id = "c" + id_i;
			document.getElementById(id).style.border = "2px solid #dddddd"  ;
		}
		*/
		if( cselected != '0' ) {
			document.getElementById(cselected).style.border = "2px solid #dddddd"  ;
		}
		return false;
	} else {
		return true;
	}
}

function start_splash() {
	document.getElementById('loadmsg').style.display = "block";
	document.getElementById('loadmsg').style.cursor = "wait";
	return false;
}

function stop_splash() {
	document.getElementById('loadmsg').style.display = "none";
	document.getElementById('loadmsg').style.cursor = "auto";
	return false;
}

function switchpage ($page) {
	document.getElementById('ip').value = $page;
	document.forms.iconmenu.submit();
}
