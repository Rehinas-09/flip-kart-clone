let allProducts = [];

// Fetch JSON data
fetch("demo.json")
    .then(res => res.json())
    .then(data => {
        allProducts = data;
        displayProducts(allProducts);
        console.log(allProducts)
    })
    .catch(err => console.error("Error fetching products:", err));

// Get all range checkboxes
const rangeCheckboxes = document.querySelectorAll(".range-checkbox");

// Add event listener to each checkbox
rangeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        // Get all selected ranges
        const selectedRanges = Array.from(rangeCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // If no checkbox is selected → show all products
        if (selectedRanges.length === 0) {
            displayProducts(allProducts);
            return; jn
        }

        // Filter products based on selected ranges
        const filteredProducts = allProducts.filter(product => {
            return selectedRanges.some(range => {
                const [min, max] = range.split("-").map(Number);
                return product.price >= min && product.price <= max;
            });  const ram=document.getElementById("valu")
        });

        displayProducts(filteredProducts);
    });
});

// Function to display products
function displayProducts(products) {
    const container = document.querySelector(".product-container");
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>No products found</p>";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
        `;
        container.appendChild(card);
    });
}


 