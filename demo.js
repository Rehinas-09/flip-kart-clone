const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const productList = document.getElementById("productList");

let allProducts = [];

// Fetch products from JSON
async function fetchProducts() {
  try {
    const response = await fetch("products.json");
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Display products
function displayProducts(products) {
  if (products.length === 0) {
    productList.innerHTML = `<p>No products found in this price range.</p>`;
    return;
  }

  productList.innerHTML = products
    .map(
      (p) => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Brand: ${p.brand}</p>
            <p class="price">₹${p.price.toLocaleString()}</p>
        </div>`
    )
    .join("");
}

// Filter based on min & max price
function filterByPrice() {
  const min = parseInt(minPrice.value) || 0;
  const max = parseInt(maxPrice.value) || Infinity;
 console.log(min) 
 console.log(max)
  const filtered = allProducts.filter(p => p.price >= min && p.price <= max);
  displayProducts(filtered);
}

// Event Listeners
minPrice.addEventListener("change", filterByPrice);
maxPrice.addEventListener("change", filterByPrice);

// Initial Load
fetchProducts();



 