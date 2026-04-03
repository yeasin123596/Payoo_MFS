const validPin = 1234;

document.getElementById("add-money-button")
.addEventListener('click', function(event){
    event.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber  = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin").value);
    const availableAmount = parseInt(document.getElementById("available-amount").innerText);

    if( accountNumber.length < 11)  {
        alert("Please Enter A Valid Account Number");
        document.getElementById("pin").value = '';
        return;
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