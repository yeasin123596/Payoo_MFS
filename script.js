const loginButton = document.getElementById("login-button");

loginButton.addEventListener('click', function(event){
    event.preventDefault();
    
    const mobileNumber = 12345678901;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if( mobileNumberValue.length ===  11 && mobileNumberValueConverted === mobileNumber) {
        if ( pinNumberValueConverted === pinNumber) {
            window.location.href="./home.html";
        } else {
            alert("Incorrect Pin");
        }
    } else {
        alert("Please Check Your Mobile Number");
    }
})