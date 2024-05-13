const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalPrice = 0;
cartItems.forEach(item => {
totalPrice += parseInt(item.price) * parseInt(item.quantity);
});
const orderSummaryPrice = document.querySelector('.order__summary-price');
orderSummaryPrice.textContent = totalPrice + ' ₽';