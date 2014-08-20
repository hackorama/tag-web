function showLogin() {
	if (!document.getElementById) {
		return true;
	}
	var obj = document.getElementById( "loginbox" );
	obj.style.display = "block";
	return false;
}

function clearLogin() {
	if (!document.getElementById) {
		return true;
	}
	var obj = document.getElementById( "loginbox" );
	obj.style.display = "none";
	return false;
}

function loginCheck() {
	return loginError();
}

function loginError() {
	if (!document.getElementById) {
		return true;
	}
	var obj = document.getElementById( "loginerror" );
	obj.value = "User accounts disabled in the beta version...";
	return false;
}
