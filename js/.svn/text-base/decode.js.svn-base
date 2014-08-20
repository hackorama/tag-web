function verifyCode(theform){
	var code = theform.code.value;
	var codemark = document.getElementById('codemarker');
	var error = document.getElementById('code_error');
	codemark.style.border = "1px solid #ffffff" ;
	if( code.length < 12 ){
		codemark.style.border = "1px solid #ff0000" ;
		theform.code.focus();
                theform.code.select();
		error.childNodes[0].nodeValue ="Please enter a 12 digit code...";
		error.style.color = "#ff0000" ;
		return false;
	}
	//FIXME - check for valid digits only
	return true;
}

function verifyURL(theform){
	var url = theform.url.value;
	var urlmark = document.getElementById('urlmarker');
	var error = document.getElementById('url_error');
	urlmark.style.border = "1px solid #ffffff" ;
	if( url.length < 1 ){
		urlmark.style.border = "1px solid #ff0000" ;
		theform.url.focus();
                theform.url.select();
		error.childNodes[0].nodeValue ="Please enter the URL ";
		error.style.color = "#ff0000" ;
		return false;
	}
	//FIXME - check for valid accessible URL 
	return true;
}

function resetForms(){
	var urlmark = document.getElementById('urlmarker');
	var url_error = document.getElementById('url_error');
	var code_error = document.getElementById('code_error');
	var codemark = document.getElementById('codemarker');
	code_error.childNodes[0].nodeValue = '&nbsp;';
	url_error.childNodes[0].nodeValue = '&nbsp;';
	code_error.style.color = "#fff" ;
	url_error.style.color = "#fff" ;
	urlmark.style.border = "1px solid #fff" ;
	codemark.style.border = "1px solid #fff" ;
	return false;
}
