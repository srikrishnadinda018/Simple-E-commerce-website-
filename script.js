// Initialize cart count
let cartCount = 0;

// Select elements
const cartCountSpan = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add event listeners to each add to cart button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        alert('Added to cart!');
    });
});
