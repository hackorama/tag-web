
function validateEmail(str) {

	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (str.indexOf(at)==-1){
		return false;
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		return false;
	}

	 if (str.indexOf(at,(lat+1))!=-1){
		return false;
	 }

	 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		return false;
	 }

	 if (str.indexOf(dot,(lat+2))==-1){
		return false;
	 }
		
	 if (str.indexOf(" ")!=-1){
		return false;
	 }
 	 return true;
}

function validateEmailForm(theform) {
		var email = theform.email.value; 
		var emailmark = document.getElementById('emailmarker');
		var email_error = document.getElementById('email_errormsg');
		emailmark.style.border = "1px solid #ffffff" ;
		email_error.childNodes[0].nodeValue =  " ";

		if( email.length == 0  ){
			theform.email.focus();
			theform.email.select();
			email_error.childNodes[0].nodeValue =  "Please enter an email";
			email_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
			return false;
		}

		if( email.length > 0 ){
		    if( ! validateEmail(email) ){
			theform.email.focus();
			theform.email.select();
			email_error.childNodes[0].nodeValue =  "The email could be mistyped, please check";
			email_error.style.color = "#ff0000" ;
			email_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
			return false;
		    }
		}

		return true;
}

function validateEmailFormCaptcha(theform) {
		var email = theform.email.value; 
		var emailmark = document.getElementById('emailmarker');
		var email_error = document.getElementById('email_errormsg');
		emailmark.style.border = "1px solid #ffffff" ;
		email_error.childNodes[0].nodeValue =  " ";

		var code = theform.c.value; 
		var codemark = document.getElementById('codemarker');
		var code_error = document.getElementById('code_errormsg');
		codemark.style.border = "1px solid #ffffff" ;
		code_error.childNodes[0].nodeValue =  " ";


		if( email.length == 0  ){
			theform.email.focus();
			theform.email.select();
			email_error.childNodes[0].nodeValue =  "Please enter an email";
			email_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
			return false;
		}

		if( email.length > 0 ){
		    if( ! validateEmail(email) ){
			theform.email.focus();
			theform.email.select();
			email_error.childNodes[0].nodeValue =  "The email could be mistyped, please check";
			email_error.style.color = "#ff0000" ;
			email_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
			return false;
		    }
		}

		if( code.length == 0  ){
			theform.c.focus();
			theform.c.select();
			code_error.childNodes[0].nodeValue =  "Please enter the spam check";
			code_error.style.color = "#ff0000" ;
			codemark.style.border = "1px solid #ff0000" ;
			return false;
		}

		return true;
}
