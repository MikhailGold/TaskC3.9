area.value = localStorage.getItem('area');
area.oninput = () => {
	localStorage.setItem('area', area.value)
};

if(localStorage.getItem('area')){
	document.getElementById("country").innerHTML = "Ваш город: " + area.value;
    document.getElementById('area').hidden = true;
    document.getElementById('area_button').hidden = false;
}
