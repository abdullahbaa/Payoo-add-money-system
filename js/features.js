// Show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    // Show cash out button clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
});

// Show add money form add hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    
    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})