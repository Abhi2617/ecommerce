let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}
function searchProducts() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
