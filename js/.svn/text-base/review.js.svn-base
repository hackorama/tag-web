
var selectedicon = '1';

function showform($name ) {
	document.getElementById('nameit').style.display = "none";
	document.getElementById('mailit').style.display = "none";
	document.getElementById('flickrit').style.display = "none";

	document.getElementById($name).style.display = "block";
}

function showimg(i, $img ) {
	if (document.getElementById) {
		var selected = i;
		document.getElementById('selection').src = "/fs/scans/" + $img  ;
		document.getElementById(selected).style.border = "2px solid #ff0000"  ;
		if( selectedicon != '0' ) {
			document.getElementById(selectedicon).style.border = "2px solid #dddddd"  ;
		}
		selectedicon = selected;
		return false;
	} else {
		return true;
	}
}

function confirmDelete(){
        if( confirm("Are you sure you want to delete this image ?") ) {
                return true;
        }
        return false;
}


function validateName(str) {
	for(var i=0; i < str.length; i++)
	{
		var char = str.charAt(i);
		var a = char.charCodeAt(0);
		if((a > 47 && a < 59) || (a > 64 && a < 91) || (a > 96 && a < 123)) {
		}else{
			return false;
		}
	}
	return true;
}

function validateNameForm(theform) {
		var name = theform.name.value; 
		var namemark = document.getElementById('namemarker');
		var name_error = document.getElementById('name_errormsg');
		namemark.style.border = "1px solid #ffffff" ;
		name_error.childNodes[0].nodeValue =  " ";
		if( name.length == 0  ){
			theform.name.focus();
			theform.name.select();
			name_error.childNodes[0].nodeValue =  "Please enter a name";
			name_error.style.color = "#ff0000" ;
			namemark.style.border = "1px solid #ff0000" ;
			return false;
		}
		if( name.length > 0 ){
		    if( ! validateName(name) ){
			theform.name.focus();
			theform.name.select();
			name_error.childNodes[0].nodeValue =  "Please use only letters and digits for the name";
			name_error.style.color = "#ff0000" ;
			namemark.style.border = "1px solid #ff0000" ;
			return false;
		    }
		}
		return true;
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
			emailmark.style.border = "1px solid #ff0000" ;
			return false;
		    }
		}
		return true;
}

function validateFlickrForm(theform) {
		var email = theform.email.value; 
		var emailmark = document.getElementById('flickrmarker');
		var email_error = document.getElementById('flickr_errormsg');
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
		return true;
}

function validateBuzznetForm(theform) {
                var user = theform.user.value;
                var key = theform.key.value;
                var usermark = document.getElementById('buzznetusermarker');
                var keymark = document.getElementById('buzznetkeymarker');
                var user_error = document.getElementById('buzznet_errormsg');
                usermark.style.border = "1px solid #ffffff" ;
                keymark.style.border = "1px solid #ffffff" ;
                user_error.childNodes[0].nodeValue =  " ";
                if( user.length == 0  ){
                        theform.user.focus();
                        theform.user.select();
                        user_error.childNodes[0].nodeValue =  "Please enter a username";
                        user_error.style.color = "#ff0000" ;
                        usermark.style.border = "1px solid #ff0000" ;
                        return false;
		}
                if( key.length == 0 ){
                        theform.key.focus();
                        theform.key.select();
                        user_error.childNodes[0].nodeValue =  "Please enter the keyword";
                        user_error.style.color = "#ff0000" ;
                        keymark.style.border = "1px solid #ff0000" ;
                        return false;
		}
                return true;
}

function validatePhotoBucketForm(theform) {
                var user = theform.user.value;
                var key = theform.key.value;
                var usermark = document.getElementById('photobucketusermarker');
                var pinmark = document.getElementById('photobucketpinmarker');
                var user_error = document.getElementById('photobucket_errormsg');
                usermark.style.border = "1px solid #ffffff" ;
                pinmark.style.border = "1px solid #ffffff" ;
                user_error.childNodes[0].nodeValue =  " ";
                if( user.length == 0  ){
                        theform.user.focus();
                        theform.user.select();
                        user_error.childNodes[0].nodeValue =  "Please enter a username";
                        user_error.style.color = "#ff0000" ;
                        usermark.style.border = "1px solid #ff0000" ;
                        return false;
                }
                if( key.length == 0 ){
                        theform.key.focus();
                        theform.key.select();
                        user_error.childNodes[0].nodeValue =  "Please enter the PIN";
                        user_error.style.color = "#ff0000" ;
                        pinmark.style.border = "1px solid #ff0000" ;
                        return false;
                }
                return true;
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

