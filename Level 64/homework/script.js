const myForm = document.getElementById('myForm');
function validateEmail(){
    let name = myForm.elements.name.value;
    let email = myForm.elements.email.value;
    let password = myForm.elements.password.value;
    let checkbox = myForm.elements.checkbox.value;

    if(name === '' || email === '' || password === '') {
        alert("Please fill all fields")
        return;
    }
    else if(!checkbox){
        alert("Please submit the checkbox!")
    }
        console.log(name);
        console.log(email);
        console.log(password);
}