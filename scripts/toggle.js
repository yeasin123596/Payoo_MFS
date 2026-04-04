// Add Money Toggle
document.getElementById("add-money-service").addEventListener('click', function(){
    document.getElementById("add-money-form").style.display = 'block';
    document.getElementById("cash-out-form").style.display = 'none';
})

// Cash Out Toggle
document.getElementById("cash-out-service").addEventListener('click', function(){
    document.getElementById("cash-out-form").style.display = 'block';
    document.getElementById("add-money-form").style.display = 'none';
})