document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const productName = product.dataset.name;
            const productPrice = parseInt(product.dataset.price);

            // Add item to the cart
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ₹${productPrice}`;
            cartItems.appendChild(cartItem);

            // Update total price
            totalPrice += productPrice;
            totalPriceEl.textContent = totalPrice;
        });
    });
});
