function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = '.././Screen3/payment.html'; 
    }
}

function getAmountFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('amount') || '0.00';
}

function formatAmount(amount) {
    let num = parseFloat(amount);
    if (isNaN(num)) num = 0;
    return '₱ ' + num.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

document.addEventListener('DOMContentLoaded', function() {
    const amount = getAmountFromQuery();
    document.getElementById('checkout-amount').textContent = formatAmount(amount);

    const compBtn = document.querySelector('.comp-btn');
    const loaderOverlay = document.getElementById('loader-overlay');

    compBtn.addEventListener('click', function() {
      
        loaderOverlay.style.display = 'flex';

      
        const amountText = document.getElementById('checkout-amount').textContent;
        const amount = amountText.replace(/[^\d.]/g, '');

    
        setTimeout(() => {
            loaderOverlay.style.display = 'none';
            window.location.href = `.././Screen5/confirmation.html?amount=${encodeURIComponent(amount)}`;
        }, 3000);
    });
});