const elec=document.getElementById("electronics")
const element=document.getElementById("sub-elements")
console.log(elec)
elec.addEventListener("mouseover",()=>{
   element.style.display="block"
})
elec.addEventListener("mouseout",()=>{
    element.style.display="none"
})