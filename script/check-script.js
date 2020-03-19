function check(){

	localStorage.setItem('option1', (option1.checked == true) ? option1.checked : false);
	localStorage.setItem('option2', (option1.checked == true) ? option1.checked : false);
	localStorage.setItem('option3', (option1.checked == true) ? option1.checked : false);
	localStorage.setItem('option4', (option1.checked == true) ? option1.checked : false);
	localStorage.setItem('option5', (option1.checked == true) ? option1.checked : false);
	localStorage.setItem('option6', (option1.checked == true) ? option1.checked : false);

	option1.checked = localStorage.getItem('option1');
	option2.checked = localStorage.getItem('option2');
	option3.checked = localStorage.getItem('option3');
	option4.checked = localStorage.getItem('option4');
	option5.checked = localStorage.getItem('option5');
	option6.checked = localStorage.getItem('option6');

	localStorage.setItem('disabled1', true);
	localStorage.setItem('disabled2', true);
	localStorage.setItem('disabled3', true);
	localStorage.setItem('disabled4', true);
	localStorage.setItem('disabled5', true);
	localStorage.setItem('disabled6', true);

	option1.disabled = localStorage.getItem('disabled1');
	option2.disabled = localStorage.getItem('disabled2');
	option3.disabled = localStorage.getItem('disabled3');
	option4.disabled = localStorage.getItem('disabled4');
	option5.disabled = localStorage.getItem('disabled5');
	option6.disabled = localStorage.getItem('disabled6');
}

function clear(){

	localStorage.removeItem('option1');
	localStorage.removeItem('option2');
	localStorage.removeItem('option3');
	localStorage.removeItem('option4');
	localStorage.removeItem('option5');
	localStorage.removeItem('option6');

	localStorage.removeItem('disabled1');
	localStorage.removeItem('disabled2');
	localStorage.removeItem('disabled3');
	localStorage.removeItem('disabled4');
	localStorage.removeItem('disabled5');
	localStorage.removeItem('disabled6');
}
