const container = document.getElementById('card-container');

// Data for each card
const cardData = [
  {
    img: "https://via.placeholder.com/200x120?text=Laptop",
    title: "Laptop",
    desc: "Powerful laptop for developers"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Phone",
    title: "Smartphone",
    desc: "Latest Android phone"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Camera",
    title: "Camera",
    desc: "DSLR camera with lens kit"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Watch",
    title: "Smartwatch",
    desc: "Fitness tracking smartwatch"  
  },
  {
    img: "https://via.placeholder.com/200x120?text=Headphones",
    title: "Headphones",
    desc: "Noise-cancelling over-ear headphones"
  },
  { 
    img: "https://via.placeholder.com/200x120?text=Tablet",
    title: "Tablet",
    desc: "10-inch Android tablet"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Speaker",
    title: "Bluetooth Speaker",
    desc: "Portable wireless speaker"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Mouse",
    title: "Wireless Mouse",
    desc: "Ergonomic and fast"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Keyboard",
    title: "Mechanical Keyboard",
    desc: "RGB gaming keyboard"
  },
  {
    img: "https://via.placeholder.com/200x120?text=Monitor",
    title: "Monitor",
    desc: "27-inch 4K monitor"
  }
];

// Loop and create each card
cardData.forEach(data => {
  const card = document.createElement('div');
  card.className = 'card'; 

  card.innerHTML = `
    <img src="${data.img}" alt="${data.title}">
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
  `;

  container.appendChild(card); 
});                       
           
    const rating_section=document.createElement("div")
    rating_section.className="rating-section"
    details.appendChild(rating_section)
    const rating_icon=document.createElement("p")
    rating_icon.className="rating-icon"
    rating_section.appendChild(rating_icon)
    rating_icon.innerHTML=`
    ${data.rating}
   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" fill="#fff" viewBox="0 0 24 24">
  <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847 1.417 8.267L12 18.896l-7.417 4.971L6 15.6 0 9.753l8.332-1.735z"/>
    </svg>
  
`
    const rating_count=document.createElement("p")
    rating_count.className="rating-count"
    rating_section.appendChild(rating_count)
    rating_count.innerHTML=`
     ${data.rating_count} Ratings & ${data.rating_count} Reviews
    `          
 