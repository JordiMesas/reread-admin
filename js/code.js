//1 ejerc

const validacionForm = () => {
	//dom variables
	let emailv = document.getElementById('email').value;
	let passwordv = document.getElementById('psswd').value;
	let message = document.getElementById('message');
	let email = document.getElementById('email');
	let password = document.getElementById('psswd');
	//basic variables
	let border = "1px solid red";
	let init = "1px solid #ccc";

	email.style.border = init;
	password.style.border = init;
	message.style.color = 'red';

	if (emailv == '' && passwordv == '') {
        message.innerHTML = 'Rellena todos los campo ';
		email.style.border = border;
		password.style.border = border;
	} else if (emailv == '') {
		message.innerHTML = 'Rellena el campo usuario';
		email.style.border = border;
	} else if (passwordv == '') {
		message.innerHTML = 'Rellena el campo contraseña';
		password.style.border = border;
	} else {
		return true;
	}
	return false;

};

// 2 ejer

// const validacionForm = () => {
// 	//dom variables 
// 	let emailv = document.getElementById('email').value;
// 	let passwordv = document.getElementById('psswd').value;
// 	let message = document.getElementById('message');
// 	let email = document.getElementById('email');
// 	let password = document.getElementById('psswd');
// 	let submit = document.getElementById('submit');
// 	//basic variables
// 	let border = "1px solid red";
// 	let init = "1px solid #ccc";
// 	let color = "red";

// 	email.style.border = init;
// 	password.style.border = init;
// 	message.style.color = color;
// 	submit.style.border = "2px solid blue";
// 	submit.style.backgroundColor = "#FFC1CA";
// 	submit.style.color = color;

// 	if (emailv == '' && passwordv == '') {
//         message.innerHTML = 'Rellena todos los campo ';
// 		email.style.border = border;
// 		password.style.border = border;
// 	} else if (emailv == '') {
// 		message.innerHTML = 'Rellena el campo usuario';
// 		email.style.border = border;
// 	} else if (passwordv == '') {
// 		message.innerHTML = 'Rellena el campo contraseña';
// 		password.style.border = border;
// 	} else {
// 		return true;
// 	}
// 	return false;
// };

//3 ejer

// const validacionForm = () => {
// 	//dom variables
// 	let emailv = document.getElementById('email').value;
// 	let passwordv = document.getElementById('psswd').value;
// 	let message = document.getElementById('message');
// 	let email = document.getElementById('email');
// 	let password = document.getElementById('psswd');
// 	//basic variables
// 	let border = "1px solid red";
// 	let init = "1px solid #ccc";
	
// 	email.style.border = init;
// 	password.style.border = init;
// 	message.style.backgroundColor = "#FFC1CA";
// 	message.style.padding = "14px 20px";
// 	message.style.margin = "8px 0";
// 	message.style.borderRadius = "4px";
// 	message.style.fontWeight = "bold";

// 	if (emailv == '' && passwordv == '') {
//         message.innerHTML = 'Rellena todos los campos';
// 		email.style.border = border;
// 		password.style.border = border;
// 	} else if (emailv == '') {
// 		message.innerHTML = 'Rellena el campo usuario';
// 		email.style.border = border;
// 	} else if (passwordv == '') {
// 		message.innerHTML = 'Rellena el campo contraseña';
// 		password.style.border = border;
// 	} else {
// 		return true;
// 	}

// 	return false;
// };

// 4 ejer

// const validacionForm = () => {	
// 	// dom variables
// 	let emailv = document.getElementById('email').value;
// 	let passwordv = document.getElementById('psswd').value;	
// 	let email = document.getElementById('email');
// 	let password = document.getElementById('psswd');
// 	//let message = document.getElementById('message');
// 	let submit = document.getElementById('submit');
// 	let nameEmail = document.getElementsByTagName('label')[0];
// 	let namePsswd = document.getElementsByTagName('label')[1];
// 	//layout variables
// 	let color = 'red';
// 	let initColor = "1px solid #ccc";
// 	let initial = "initial";
// 	let border = '1px solid red';

// 	email.style.border = initColor;
// 	password.style.border = initColor;
// 	nameEmail.style.color = initial;
// 	namePsswd.style.color = initial;
// 	submit.style.border = '2px solid blue';

// 	if (emailv == '' && passwordv == '') {
// 		nameEmail.style.color = color;
// 		namePsswd.style.color = color;
// 		//message.innerHTML = 'Rellena todos los campos';
// 		email.style.border = border;
// 		password.style.border = border;
// 	} else if (emailv == '') {
// 		nameEmail.style.color = color;
// 		//message.innerHTML = 'Rellena el campo usuario';
// 		email.style.border = border;
// 	} else if (passwordv == '') {
// 		namePsswd.style.color = color;
// 		//message.innerHTML = 'Rellena el campo contraseña';
// 		password.style.border = border;
// 	} else {
// 		return true;
// 	}

// 	return false;
// };
