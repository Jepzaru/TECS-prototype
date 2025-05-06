
const paymentOptions = document.querySelectorAll('.payment-grid img');


paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
  
    window.location.href = '../Screen3/payment.html';
  });
});
