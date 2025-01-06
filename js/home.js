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


// Step-3:Verify Pin Number
// Wrong way to validate pin number

if (pinNumberInput === '1234'){
    console.log('adding money to your account');
}
else{
    alert('Failed to add money! please try again');
}
// Step-4:GEt the current balance

const balance = document.getElementById('account-balance').innerText;
console.log(balance);

// Step-5:Add addMoneyInput with balance

const addMoneyNumber = parseFloat(addMoneyInput)
const balanceNumber =parseFloat(balance);
// console.log(typeof addMoneyInput);

const newBalance = addMoneyNumber + balanceNumber;
console.log(newBalance);

// Step-6: Update the balance in UI/DOM
    document.getElementById('account-balance').innerText = newBalance;

});

