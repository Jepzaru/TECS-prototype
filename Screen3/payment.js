
function goBack() {
  
    if (document.referrer) {
        window.history.back();
    } else {
     
        window.location.href = '../Screen2/amount.html'; 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-icon');
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }
});


const amountDisplay = document.querySelector('.input-container h1');
let currentAmount = '0';
let hasDecimal = false;


function formatAmount(amount) {
  
    const formattedAmount = parseFloat(amount).toFixed(2);
  
    return `₱ ${parseFloat(formattedAmount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}


function updateDisplay() {
    amountDisplay.textContent = formatAmount(currentAmount);
}


function handleNumberInput(value) {
    if (currentAmount === '0' && value !== '.') {
        currentAmount = value;
    } else {
        currentAmount += value;
    }
    updateDisplay();
}


function handleClear() {
    currentAmount = '0';
    hasDecimal = false;
    updateDisplay();
}


function handleBackspace() {
    if (currentAmount.length === 1) {
        currentAmount = '0';
    } else {
        if (currentAmount[currentAmount.length - 1] === '.') {
            hasDecimal = false;
        }
        currentAmount = currentAmount.slice(0, -1);
    }
    updateDisplay();
}


document.querySelectorAll('.num-btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            handleClear();
        } else if (button.querySelector('.fa-delete-left')) {
            handleBackspace();
        } else if (value === '+' || value === '=') {
            
            return;
        } else {
            
            if (value === '00' && currentAmount === '0') return;
            if (value === '000' && currentAmount === '0') return;
            handleNumberInput(value);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const proceedBtn = document.getElementById('proceed-btn');
    const amountDisplay = document.getElementById('amount-display');

    proceedBtn.addEventListener('click', function() {
   
        let amount = amountDisplay.textContent.replace(/[₱,\s]/g, '');
     
        if (!amount || isNaN(amount)) amount = '0.00';
       
        window.location.href = `.././Screen4/checkout.html?amount=${encodeURIComponent(amount)}`;
    });
});


updateDisplay();