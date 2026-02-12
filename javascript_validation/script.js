function validateForm() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

if (name === "") {
alert("Name must not be empty");
return false;
}

if (email === "") {
alert("Email must not be empty");
return false;
}

if(age<18 || age>100)
{
alert("You must be at least 18 years old and at most 100 years old");
return false;
}

if(prn === "")
{
alert("PRN must not be empty");
return false;
}

if (password.length < 6) {
alert("Password must be at least 6 characters long");
return false;
}

alert("Form submitted successfully!");
return true;
}