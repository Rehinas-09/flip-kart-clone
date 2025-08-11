const checkbox=document.querySelectorAll('#filters')
const products=document.querySelectorAll(".products")
checkbox.forEach(checkbox=>{
    checkbox.addEventListener('change',filterProduct)
})    
function filteraProduct(){
  const  selectedCategories=Array.from(checkboxes)             
  .filter(chechbox=>checkbox.checked)
  .map(checkbox=>checkbox.value);
  products.forEach(products=>{
    const category=products.getAttribute('data-category');
    if(selectedCategories.length==0|| selectedCategories.includes(category)){
      products.style.display="block"
    }
    else{      
      products.style.display="none"
    }
  })         
}
