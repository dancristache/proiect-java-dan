
let valid=true;


// Initialize variables

let email=document.querySelector("#email")
let pass=document.querySelector("#pass")
let username=document.querySelector("#username")
let fname=document.querySelector("#fname")
let lname=document.querySelector("#lname")
let quantity=document.querySelector("#quantity")


// On submit

document.querySelector(".btn").addEventListener("click", (e) => {

    e.preventDefault();
    
    // Validate that all information is filled
    
    if (
    !email.value ||

    !pass.value ||

    !username.value ||

    !fname.value ||
    
    !lname.value ||
    
    !quantity.value
    
    
    ) {
    
    alert("Please fill in all information.");
    valid=false;
    
    }
    
        
    // First name and last name should be alphabetic only
    
    let letters = /^[A-Za-z]+$/;
    
    if (!fname.value.match(letters) || !lname.value.match(letters)) {
    
    alert("First name and last name should be alphabetic only.");
    valid=false;
    
    }
    
    // First letter of name should be capitalized
    
    if (fname.value[0] != fname.value[0].toUpperCase()) {
    
    alert("First letter of first name should be capitalized.");
    valid=false;
    
    }
    
    if (lname.value[0] != lname.value[0].toUpperCase()) {
    
    alert("First letter of last name should be capitalized.");
    valid=false;

    
    }
    
    // First name and last name cannot be the same
    
    if (fname.value == lname.value) {
    
    alert("First name and last name cannot be the same.");
    valid=false;
    
    }
    
        
    // Email address must contain @ and .
    
    if (!email.value.includes("@") || !email.value.includes(".")) {
    
    alert("Email address must contain @ and .");
    valid=false
    
    }
    
    // Age must be at least 2 characters
    
    if (quantity.value < 18 || quantity.value > 65) {
    
    alert("You must be between 18 and 65 years old");
    valid=false;
    
    }
    console.log(valid)

    if (valid){
        let stocare=JSON.parse(localStorage.getItem("savelocalstorage"))
        let storage=[];

        if(stocare){
        storage=stocare;
        }
        // save in storage
            let user={
            username:"",
            firstname:"",
            lastname:"",
            password:"",
            email:"",
            age:"",
            shift:[]
        }
        user.username=username.value;
        user.firstname=fname.value;
        user.lastname=lname.value;
        user.password=pass.value;
        user.email=email.value;
        user.age=quantity.value;
        storage.push(user);
        console.log(storage);
        localStorage.setItem("savelocalstorage",JSON.stringify(storage));}
        window.location.href="login.html"
    



});  


// login
