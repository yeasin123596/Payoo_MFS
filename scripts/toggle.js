// Add Money Toggle
document.getElementById("add-money-service").addEventListener('click', function(){
    document.getElementById("add-money-form").style.display = 'block';
    document.getElementById("cash-out-form").style.display = 'none';
    document.getElementById("transfer-money-form").style.display = 'none';
    document.getElementById("get-bonus-form").style.display = 'none';
    document.getElementById("pay-bill-form").style.display = 'none';
})

// Cash Out Toggle
document.getElementById("cash-out-service").addEventListener('click', function(){
    document.getElementById("cash-out-form").style.display = 'block';
    document.getElementById("add-money-form").style.display = 'none';
    document.getElementById("transfer-money-form").style.display = 'none';
    document.getElementById("get-bonus-form").style.display = 'none';
    document.getElementById("pay-bill-form").style.display = 'none';
})

// Transfer Money Toggle
document.getElementById("transfer-money-service").addEventListener('click', function(){
    document.getElementById("transfer-money-form").style.display = 'block';
    document.getElementById("add-money-form").style.display = 'none';
    document.getElementById("cash-out-form").style.display = 'none';
    document.getElementById("get-bonus-form").style.display = 'none';
    document.getElementById("pay-bill-form").style.display = 'none';
})

// Get Bonus Toggle 
document.getElementById("get-bonus-service").addEventListener('click', function(){
    document.getElementById("get-bonus-form").style.display = 'block';
    document.getElementById("add-money-form").style.display = 'none';
    document.getElementById("cash-out-form").style.display = 'none';
    document.getElementById("transfer-money-form").style.display = 'none';
    document.getElementById("pay-bill-form").style.display = 'none';
})

// Pay bill Toggle
document.getElementById("pay-bill-service").addEventListener('click', function(){
    document.getElementById("pay-bill-form").style.display = 'block';
    document.getElementById("add-money-form").style.display = 'none';
    document.getElementById("cash-out-form").style.display = 'none';
    document.getElementById("transfer-money-form").style.display = 'none';
    document.getElementById("get-bonus-form").style.display = 'none';
})