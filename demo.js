let allProducts = [];
fetch("demo.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayProducts(allProducts); 
  });
function displayProducts(products) {
  const container = document.querySelector(".products-container");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₹${product.price.toLocaleString()}</p>
    `;
    container.appendChild(card);
  });
}
 const checkboxes=document.querySelectorAll(".filter-section input[type='checkbox']")
checkboxes.forEach(checkbox=>{
  checkbox.addEventListener("change",()=>{
    const selectedBrand=Array.from(checkboxes)
    .filter(cd=>cd.checked)
    .map(cb=>cb.value);
    if(selectedBrand.length==0){
      displayProducts(allProducts)
    }
    else{         
      const filtered=allProducts.filter(p=>selectedBrand.includes(p.brand))
      displayProducts(filtered)
    }
  })
})