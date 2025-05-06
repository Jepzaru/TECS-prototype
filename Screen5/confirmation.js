document.addEventListener('DOMContentLoaded', function() {

    function formatDateTime(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }

    const now = new Date();
    const formatted = formatDateTime(now);

   
    const dateDetail = Array.from(document.querySelectorAll('.ref-details'))
        .find(el => el.textContent.trim().startsWith('Date:'));

    if (dateDetail) {
        dateDetail.textContent = `Date: ${formatted}`;
    }
});

const amount = localStorage.getItem('checkoutAmount');

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const amount = params.get('amount');
    if (amount) {
        document.getElementById('amount-paid').textContent = `₱ ${parseFloat(amount).toFixed(2)}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            window.location.href = '.././Screen2/amount.html';
        });
    }
});
