
function validateFeedbackForm(theform) {
		var message = theform.message.value; 
		var messagemark = document.getElementById('messagemarker');
		messagemark.style.border = "1px solid #ffffff" ;

		var error = document.getElementById('errormsg');
		error.childNodes[0].nodeValue =  " ";


		if( message.length == 0  ){
			theform.message.focus();
			theform.message.select();
			error.childNodes[0].nodeValue =  "Please enter a message";
			error.style.color = "#ff0000" ;
			messagemark.style.border = "1px solid #ff0000" ;
			return false;
		}
		return true;
}

function validateFeedbackFormCaptcha(theform) {
		var message = theform.message.value; 
		var messagemark = document.getElementById('messagemarker');
		messagemark.style.border = "1px solid #ffffff" ;

		var code = theform.code.value; 
		var codemark = document.getElementById('codemarker');
		codemark.style.border = "1px solid #ffffff" ;

		var error = document.getElementById('errormsg');
		error.childNodes[0].nodeValue =  " ";


		if( message.length == 0  ){
			theform.message.focus();
			theform.message.select();
			error.childNodes[0].nodeValue =  "Please enter a message";
			error.style.color = "#ff0000" ;
			messagemark.style.border = "1px solid #ff0000" ;
			return false;
		}

		if( code.length == 0  ){
			theform.code.focus();
			theform.code.select();
			error.childNodes[0].nodeValue =  "Please enter the spam check";
			error.style.color = "#ff0000" ;
			codemark.style.border = "1px solid #ff0000" ;
			return false;
		}

		return true;
}

