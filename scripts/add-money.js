// Log Out Button

document.getElementById("logout-button")
.addEventListener('click', function(event){
    event.preventDefault();

    window.location.href="./index.html"

})



// Add Money Feature

const validPin = 1234;

document.getElementById("add-money-button")
.addEventListener('click', function(event){
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber  = document.getElementById("account-number").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin").value);
    const availableAmount = parseFloat(document.getElementById("available-amount").innerText);

    if( accountNumber.length < 11)  {
        alert("Please Enter A Valid Account Number");
        document.getElementById("pin").value = '';
        return;
    }

    if( !amount || isNaN(amount) || amount <= 0) {
        alert("Please Enter Amount");
    }

    if( pinNumber !== validPin) {
        alert("PIN number is wrong.");
        document.getElementById("pin").value = '';
        return;
    }

    const totalNewAvailableAmount = availableAmount + amount;
    console.log(totalNewAvailableAmount);

    document.getElementById("available-amount").innerText = totalNewAvailableAmount;

    this.form.reset();
 
})

