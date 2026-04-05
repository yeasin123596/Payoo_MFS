// Cash out Feature

document.getElementById("cash-out-button").addEventListener("click", function(event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const amount = parseFloat(document.getElementById("cash-out-amount").value);
    const pin = parseInt(document.getElementById("cash-out-pin").value);
    const availableAmount = parseFloat(document.getElementById("available-amount").innerText);

    if( agentNumber.length != 11) {
        alert("Enter a valid agent account number");
        document.getElementById("cash-out-pin").value = '';
        document.getElementById("cash-out-amount").value='';
        return;
    }

    if( !amount || isNaN(amount) || amount < 0) {
        alert("Please enter the amount you want to cash out");
        document.getElementById("cash-out-pin").value = '';
        return;
    }

    if( pin !== validPin) {
        alert("Pin number is wrong");
        document.getElementById("cash-out-pin").value = '';
        return;
    }

    const totalAvailableAmount = availableAmount - amount;
    document.getElementById("available-amount").innerText = totalAvailableAmount;

    this.form.reset();
})
