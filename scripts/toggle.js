// Function to handle toggle
function handelToggle (id) {
    const forms = document.getElementsByClassName("form");
    for(const form of forms) {
        form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

// Function to change style when selected
function changeStyle(id) {
    const buttons = document.getElementsByClassName("service-btn")  
        for (const btn of buttons) {
            btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
            btn.classList.add("border-gray-300");
        }
    document.getElementById(id).classList.remove("border-gray-300");   
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}



// Add Money Toggle
document.getElementById("add-money-service").addEventListener('click', function(){
    handelToggle("add-money-form");
    changeStyle("add-money-service");
})

// Cash Out Toggle
document.getElementById("cash-out-service").addEventListener('click', function(){
    handelToggle("cash-out-form");
    changeStyle("cash-out-service");
})

// Transfer Money Toggle
document.getElementById("transfer-money-service").addEventListener('click', function(){
    handelToggle("transfer-money-form");
    changeStyle("transfer-money-service");
})

// Get Bonus Toggle 
document.getElementById("get-bonus-service").addEventListener('click', function(){
    handelToggle("get-bonus-form");
    changeStyle("get-bonus-service");
})

// Pay bill Toggle
document.getElementById("pay-bill-service").addEventListener('click', function(){
    handelToggle("pay-bill-form");
    changeStyle("pay-bill-service");
})

// Transactions Toggle
document.getElementById("transactions-service").addEventListener('click', function(){
    handelToggle("transactions-form");
    changeStyle("transactions-service");
})