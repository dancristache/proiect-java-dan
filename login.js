var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

let stocare=JSON.parse(localStorage.getItem("savelocalstorage"))
for(let user of stocare){
    if( username == user.username && password == user.password){
       let log = username;
        localStorage.setItem("log", JSON.stringify(log));
        alert ("Login successfully");
        window.location.href = "shift.html";
        return;
    }
}

alert("User has not foun");
}
