const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
function updateProductDisplay() {
    const selectedColor = document.getElementById('color-select').value;
    const selectedSize = document.getElementById('size-select').value;

    const variant = product.variants.find(v => 
        v.color.toLowerCase() === selectedColor &&
        v.size === selectedSize
    );

    if (variant) {
        document.getElementById('product-image').src = variant.image;
        document.getElementById('product-description').innerText = variant.description;
        document.getElementById('price-display').innerText = `Buy Now: $${variant.price.toFixed(2)}`;
    } else {
        document.getElementById('product-image').src = '';
        document.getElementById('product-description').innerText = 'Select a valid color and size.';
        document.getElementById('price-display').innerText = '';
    }
}
document.getElementById('color-select').addEventListener('change', updateProductDisplay);
document.getElementById('size-select').addEventListener('change', updateProductDisplay);
updateProductDisplay();
function addToCart(event) {
    event.stopPropagation();
    const productDetails = {
        variant: document.getElementById('variant-select') ? document.getElementById('variant-select').value : 'default',
        quantity: document.getElementById('quantity') ? document.getElementById('quantity').value : 1,
        price: '$49.99'
    };

    try {
        localStorage.setItem('cartItem', JSON.stringify(productDetails));
        alert('Product added to cart!');
    } catch (e) {
        alert('Error adding product to cart. Please try again.');
    }
}

