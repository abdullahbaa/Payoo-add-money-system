// Add money to the account

// Step-1: Add an Event Handler to the money button
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // Prevent page reload after form submit
    event.preventDefault();
    console.log('money add btn clicked');

    
// Step-2: Get money to be added to the amount balance
const addMoneyInput =document.getElementById('input-add-money').value;
console.log(addMoneyInput);

// Get the pin number provided
const pinNumberInput = document.getElementById('input-pin-number').value;
console.log(pinNumberInput);




});

