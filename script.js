function getFormvalue() {
    let firstName = document.querySelector("#form1 > input[name=fname]");
	let lastName = document.querySelector("#form1 > input[name=lname]");
	let first = firstName.value;
	let last = lastName.value;
	alert(first + " " + last);
}
