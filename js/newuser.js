
function showTerms() {
	document.getElementById('terms').style.display = "block";
	return false;
}

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

function validateUserOptForm(theform) {
		var error = 0;
		var email = theform.email.value; 
		var pin = theform.pin.value; 
		var emailmark = document.getElementById('emailmarker');
		var pinmark = document.getElementById('pinmarker');
		var option_error = document.getElementById('option_errormsg');
		emailmark.style.border = "1px solid #ffffff" ;
		pinmark.style.border = "1px solid #ffffff" ;
		option_error.childNodes[0].nodeValue =  " ";
		var ok = true;
		/*
		if( email == "" ){
			theform.email.focus();
			theform.email.select();
			email_error.childNodes[0].nodeValue =  "Please enter a email";
			email_error.style.color = "#ff0000" ;
			pin_error.childNodes[0].nodeValue =  "Please enter a four dight pin";
			pin_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
	 		return false;
		}else if( ! validateEmail(email) ){
		*/
		if( email.length == 0 && pin.length == 0 ){
			theform.email.focus();
			theform.email.select();
			option_error.childNodes[0].nodeValue =  "No options entered to update ";
			option_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
	 		ok = false;
		}
		if( email.length > 0 ){
		    if( ! validateEmail(email) ){
			theform.email.focus();
			theform.email.select();
			option_error.childNodes[0].nodeValue =  "Email seems invalid, please check";
			option_error.style.color = "#ff0000" ;
			emailmark.style.border = "1px solid #ff0000" ;
	 		ok = false;
		    }
		}
		if( pin.length < 4 && pin.length > 0 ){
			theform.pin.focus();
			theform.pin.select();
			if ( ok ) {
				option_error.childNodes[0].nodeValue =  "Please enter a four dight pin";
			} else { 
				option_error.childNodes[0].nodeValue =  "Email seems invalid, please verify and please enter a four dight pin";
			}
			option_error.style.color = "#ff0000" ;
			pinmark.style.border = "1px solid #ff0000" ;
	 		ok = false;
		}
		// if( validateMail(email) ){
		return ok;
}

function validateNewuserForm(theform) {
		var msg = "All values are required";
		var user = theform.user.value; 
		var pass1 = theform.pass1.value; 
		var pass2 = theform.pass2.value; 
		var usermark = document.getElementById('usermarker');
		var pass1mark = document.getElementById('pass1marker');
		var pass2mark = document.getElementById('pass2marker');
		var error = document.getElementById('errormsg');
		usermark.style.border = "1px solid #ffffff" ;
		pass1mark.style.border = "1px solid #ffffff" ;
		pass2mark.style.border = "1px solid #ffffff" ;
		if( user == "" ){
			theform.user.focus();
			theform.user.select();
			msg = "Please enter a username";
			usermark.style.border = "1px solid #ff0000" ;
		} else if ( pass1 == "" ){
			theform.pass1.focus();
			theform.pass1.select();
			msg = "Please eneter a password";
			pass1mark.style.border = "1px solid #ff0000" ;
		} else if ( pass2 == "" ){
			msg = "Please eneter a password";
			pass2mark.style.border = "1px solid #ff0000" ;
			theform.pass2.focus();
			theform.pass2.select();
		} else if ( pass1 == pass2 ){
			if( pass1.length < 6 ){
				theform.pass1.focus();
				theform.pass1.select();
				msg = "The password needs 6 charecters";
				pass1mark.style.border = "1px solid #ff0000" ;
				pass2mark.style.border = "1px solid #ff0000" ;
			}else {
				return true;
			}
		} else {
			if( pass1.length < 6 || pass2.length < 6 ){
				msg = "The passwords should match and should be 6 characters or more";
			} else {
				msg = "The passwords entered does not match";
			}
			theform.pass1.focus();
			theform.pass1.select();
			pass1mark.style.border = "1px solid #ff0000" ;
			pass2mark.style.border = "1px solid #ff0000" ;
		}
		error.childNodes[0].nodeValue = msg; 
		error.style.color = "#ff0000" ;
		return false;
}

function resetNewuserForm(theform) {
		if (!document.getElementById) { 
			return true; 
		}
		var msg = ".";
		var usermark = document.getElementById('usermarker');
		var pass1mark = document.getElementById('pass1marker');
		var pass2mark = document.getElementById('pass2marker');
		usermark.style.border = "1px solid #ffffff" ;
		pass1mark.style.border = "1px solid #ffffff" ;
		pass2mark.style.border = "1px solid #ffffff" ;
		document.getElementById('errormsg').childNodes[0].nodeValue = msg;
		document.getElementById('errormsg').style.color = "#fff" ;
		return false;
}

function resetForm() {
	if (!document.getElementById) { 
		return true; 
	}
	resetNewuserForm( document.getElementById("newuser") );
	return false;
}

