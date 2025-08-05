
const svg=document.getElementById("sidebar-svg")
console.log(svg)
const clockspeed1 = document.getElementById("clockspeed1")
const clockspeed = document.getElementById("clockspeed")
clockspeed1.addEventListener("click", () => {
    if (clockspeed.style.display == "none") {
        clockspeed.style.display = "block" 
    }
    else {
        clockspeed.style.display = "none"
    }
})

const discount = document.getElementById("discount-section")
console.log(discount)
const discount_1 = document.getElementById("discount")
console.log(discount_1)
discount.addEventListener("click", () => {
    if (discount_1.style.display == "none") {
        discount_1.style.display = "block"
    }
    else {
        discount_1.style.display = "none"
    }
})
const availability = document.getElementById("availability-section")
console.log(availability)
const availability_1 = document.getElementById("availability")
console.log(availability_1)
availability.addEventListener("click", () => {
    if (availability_1.style.display == "none") {
        availability_1.style.display = "block"
    }
    else {
        availability_1.style.display = "none"
    }
}) 
const feature = document.getElementById("feature-section")
const features_1 = document.getElementById("features")
feature.addEventListener("click", () => {
    if (features_1.style.display == "none") {
        features_1.style.display = "block"
    }
    else {
        features_1.style.display = "none"
    }
}) 
const type = document.getElementById("type-section")
const type_1 = document.getElementById("types")
console.log(type_1)
type.addEventListener("click", () => {
    if (type_1.style.display == "none") {
        type_1.style.display = "block"
    }       
    else {
        type_1.style.display = "none"
    }
}) 
const core = document.getElementById("core-section")
const core_1 = document.getElementById("core")
core.addEventListener("click", () => {
    if (core_1.style.display == "none") {
        core_1.style.display = "block"
    }
    else {
        core_1.style.display = "none"
    }
}) 
const os_main = document.getElementById("os-main")   
const os_sub = document.getElementById("os-sub") 
os_main.addEventListener("click", () => {
    if (os_sub.style.display == "none") {  
        os_sub.style.display = "block"
    }
    else { 
        os_sub.style.display = "none"
    }
})
const resolution = document.getElementById("resolution-section")   
const resolution_sub = document.getElementById("resolution") 
const svg12=document.getElementById("svg11")
resolution.addEventListener("click", () => {
    if (resolution_sub.style.display == "none") {  
        resolution_sub.style.display = "block"  
        resolution.style.borderBottom="none"
        svg12.style.transform="rotate(90deg)"
    }
    else { 
        resolution_sub.style.display = "none"
        resolution.style.borderBottom="1px solid #f0f0f0"
        svg12.style.transform="rotate(-90deg)"
    }   
})
const os= document.getElementById("os-section")   
const os_one = document.getElementById("os")                                                                                                                  
const svg13=document.getElementById("svg12")
os.addEventListener("click", () => {                                         
    if (os_one.style.display == "none") {   
        os_one.style.display = "block"
        os.style.borderBottom="none"
    }
    else { 
        os_one.style.display = "none"
          resolution.style.borderBottom="1px solid #f0f0f0"
    }
})
const network = document.getElementById("network-section")   
const network_sub = document.getElementById("network") 
network.addEventListener("click", () => { 
                                                                                                                                                          
    if (network_sub.style.display == "none") {          
        network_sub.style.display = "block"
    }
    else { 
        network_sub.style.display = "none"
    }
})
const sim = document.getElementById("sim-section")   
const sim_sub = document.getElementById("sim") 
sim.addEventListener("click", () => {
    if (sim_sub.style.display == "none") {  
        sim_sub.style.display = "block"
    }
    else { 
        sim_sub.style.display = "none" 
    }   
})
const offer = document.getElementById("offer-section")   
const offer_sub = document.getElementById("offers") 
// offer.addEventListener("click", () => {
//     if (offer_sub.style.display == "none") {  
//         offer_sub.style.display = "block"
//     }    
//     else { 
//         offer_sub.style.display = "none"
//     }
// })
const  screen= document.getElementById("screen-section")   
const screen_sub = document.getElementById("screen") 
const svg7=document.getElementById("svg6")
screen.addEventListener("click", () => {
    if (screen_sub.style.display == "none") {  
        screen_sub.style.display = "block"
        screen.style.borderBottom="none"
        svg7.style.transform="rotate(90deg)"
    }
    else { 
        screen_sub.style.display = "none"
        screen.style.borderBottom="1px solid #f0f0f0"
          svg7.style.transform="rotate(-90deg)"

    }
})
const  internal= document.getElementById("internal-section")   
const internal_sub = document.getElementById("internal") 
const svg5=document.getElementById("sidebar4-svg")
internal.addEventListener("click", () => {
    if (internal_sub.style.display == "none") {  
        internal_sub.style.display = "block"
        internal.style.borderBottom="none"  
       svg5.style.transform="rotate(90deg)" 
    }
    else { 
        internal_sub.style.display = "none"
        internal.style.borderBottom="1px solid #f0f0f0 "
        svg5.style.transform="rotate(-90deg)"
    }    
})
const  battery= document.getElementById("battery-section")   
const battery_sub = document.getElementById("battery") 
const svg6=document.getElementById("svg5")
battery.addEventListener("click", () => {
    if (battery_sub.style.display == "none") {  
        battery_sub.style.display = "block"
        battery.style.borderBottom="none"  
        svg6.style.transform="rotate(90deg)"  
    }
    else { 
        battery_sub.style.display = "none"
        battery.style.borderBottom="1px solid #f0f0f0 "
        svg6.style.transform="rotate(-90deg)"
    }
})
const primary = document.getElementById("primary-section")   
const primary_sub = document.getElementById("primary") 
const svg8=document.getElementById("svg7") 
primary.addEventListener("click", () => {
    if (primary_sub.style.display == "none") {  
        primary_sub.style.display = "block"
        primary.style.borderBottom="none"   
        svg8.style.transform="rotate(90deg)"  
    }
    else { 
        primary_sub.style.display = "none"
         primary.style.borderBottom="1px solid #f0f0f0 "
        svg8.style.transform="rotate(-90deg)"
    }
})
const secondary = document.getElementById("secondary-section")   
const secondary_sub = document.getElementById("secondary")
const svg9=document.getElementById("svg8") 
secondary.addEventListener("click", () => {
    if (secondary_sub.style.display == "none") {  
        secondary_sub.style.display = "block"
        secondary.style.borderBottom="none"   
        svg9.style.transform="rotate(90deg)"  
    }
    else { 
        secondary_sub.style.display = "none"
        secondary.style.borderBottom="1px solid #f0f0f0 "
        svg9.style.transform="rotate(-90deg)"
    }
})  
const processor = document.getElementById("processor-section")   
const processor_sub = document.getElementById("processor") 
const svg10=document.getElementById("svg9")
processor.addEventListener("click", () => {
    if (processor_sub.style.display == "none") {  
        processor_sub.style.display = "block"
        processor.style.borderBottom="none"   
        svg10.style.transform="rotate(90deg)"  
    }    
    else {     
        processor_sub.style.display = "none"
        processor.style.borderBottom="1px solid #f0f0f0 "
        svg10.style.transform="rotate(-90deg)"  
    }      
})
const speciality = document.getElementById("speciality-section")   
const speciality_sub = document.getElementById("speciality") 
const svg11=document.getElementById("svg10")
speciality.addEventListener("click", () => {
    if (speciality_sub.style.display == "none") {  
        speciality_sub.style.display = "block"
        speciality.style.borderBottom="none"   
        svg11.style.transform="rotate(90deg)"  
    }
    else { 
        speciality_sub.style.display = "none"      
          processor.style.borderBottom="1px solid #f0f0f0 "
        svg11.style.transform="rotate(-90deg)"  
    }  
})
const rating = document.getElementById("rating")
console.log(rating)
const rating_chart = document.getElementById("rating-chart")
const svg2=document.getElementById("sidebar1-svg")
rating.addEventListener("click", () => {
    if (rating_chart.style.display === "none") {    
        rating_chart.style.display = "block"
        rating.style.borderBottom="none"  
        svg2.style.transform="rotate(90deg)" 
    }
    else {    
        rating_chart.style.display = "none"
        rating.style.borderBottom="1px solid #f0f0f0"  
        svg2.style.transform="rotate(-90deg)"        
    }  
})    

const ram = document.getElementById("ram")
const ram_child = document.getElementById("ram-child")
const svg4=document.getElementById("sidebar3-svg")

ram.addEventListener("click", () => {
    if (ram_child.style.display == "none") {
        ram_child.style.display = "block"
         ram.style.borderBottom="none" 
         svg4.style.transform="rotate(90deg)" 
    }
    else {
        ram_child.style.display = "none"
        ram.style.borderBottom="1px solid #f0f0f0"
        svg4.style.transform="rotate(-90deg)"    
    }
})           

const gst = document.getElementById("gst")
const gst_check = document.getElementById("gst-check")
const svg3=document.getElementById("sidebar2-svg")
gst.addEventListener("click", () => {
    if (gst_check.style.display == "none") {
        gst_check.style.display = "block"
        gst.style.borderBottom="none" 
         svg3.style.transform="rotate(90deg)" 
    }
    else {
        gst_check.style.display = "none"
        gst.style.borderBottom="1px solid #f0f0f0"   
        svg3.style.transform="rotate(-90deg)"  
    }   
})
const brand = document.getElementById("brand-section")
const brand_sub = document.getElementById("brand-sub")
brand.addEventListener("click", () => {
    if (brand_sub.style.display == "none") {
        brand_sub.style.display = "block"
        brand.style.borderBottom="none"  
        svg.style.transform="rotate(90deg)"   
    }   
    else{           
        brand_sub.style.display = "none"  
        brand.style.borderBottom="1px solid #f0f0f0"   
        svg.style.transform="rotate(-90deg)"      
    }
})     
const electronics = document.getElementById("electronics")
const electronic_slide = document.getElementById("electronic-slide")
electronics.addEventListener("mouseenter",()=>{
    electronic_slide.style.display="flex"
    electronic_slide.addEventListener("mouseenter",()=>{
        electronic_slide.style.display='flex'
    })
    electronic_slide.addEventListener("mouseleave",()=>{
        electronic_slide.style.display="none"
    })  
})
// electronics.addEventListener("mouseleave",()=>{
//     electronic_slide.style.display="none"
// })   
const tv = document.getElementById("tv")
console.log(tv)
const tv_slide = document.getElementById("tv-Slide")
console.log(tv_slide)
tv.addEventListener("mouseenter",()=>{
    tv_slide.style.display="flex"
    tv_slide.addEventListener("mouseenter",()=>{
        tv_slide.style.display='flex'
    })
    tv_slide.addEventListener("mouseleave",()=>{
        tv_slide.style.display="none"
    })
})

const men = document.getElementById("men")
console.log(tv)
const slide = document.getElementById("tv-Slide")
console.log(slide)
men.addEventListener("mouseenter",()=>{
    slide.style.display="flex"
    slide.addEventListener("mouseenter",()=>{
        slide.style.display='flex'
    })
    slide.addEventListener("mouseleave",()=>{
        slide.style.display="none"
    })
})

const mobile_container=document.getElementsByClassName("mobile-container")[0]
console.log(mobile_container)
const mobileDetails=[
    {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/v/v/-original-imahe8nfmrhvqx6a.jpeg?q=70",
        mobile_name:"Tecno Pova 7 5G (Oasis Green, 128 GB)",
        ram:"8 GB RAM | 128 GB ROM ",
        mb:"17.22 cm (6.78 inch) Full HD+ Display",
        camera:"50MP + AI | 13MP Front Camera",
        battery:"6000 mAh Battery",
        processor:"Dimensity 7300 Ultimate Processor",
        warrenty:"1 Year Manufacturer Warranty for Phone",
        rating:4.5,
        rating_count:"1,298",
        review_count:"121",
        discount_price:"14,999",  
        actual_price:"18,999",
        offer:"21%"

    },
      {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/u/t/-original-imahbk7pnjgxudgz.jpeg?q=70",
        mobile_name:"Samsung Galaxy F06 5G (Lit Violet, 128 GB)",
        ram:"4 GB RAM | 128 GB ROM | Expandable Upto 1500 GB",
        mb:"17.02 cm (6.7 inch) HD+ Display",
        camera:"50MP + 2MP | 8MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"Dimensity 6300 Processor",
        warrenty:"1 Year Warranty for Device and 6 Months for In-Box Accessories",
        rating:4.1,
        rating_count:"16,864",
        review_count:"1,171",
        discount_price:"8,699",
        actual_price:"13,999", 
        offer:"37%"   
    },
          {   
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/b/c/-original-imahcjrax7j8fyuf.jpeg?q=70",
        mobile_name:"MOTOROLA Edge 60 Fusion 5G (PANTONE Mykonos Blue, 256 GB)",
        ram:"8 GB RAM | 256m GB ROM | Expandable Upto 1 TB ",
        mb:"16.94 cm (6.7 inch) Display",
        camera:"50MP + 13MP | 32MP Front Camera",
        battery:"5500 mAh Battery",
        processor:"Dimensity 7400 Processor",
        charger:"68W Charger",
        warrenty:"1 Year Warranty on Handset and 6 Months Warranty on Accessories",
        rating:4.5,
        rating_count:"41,179",
        review_count:"2,356",
        discount_price:"22,999",
        actual_price:"25,999",
        offer:"11%"     
    },
          {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70",
        mobile_name:"Motrola G85 5G (Olive Green, 128 GB)",
        ram:"8 GB RAM | 128 GB ROM ",
        mb:"16.942 cm (6.67 inch) Full HD+ Display",
        camera:"50MP + 8MP | 32MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"Dimensit",
        warrenty:"1 Year Warranty for Device and 6 Months for In-Box Accessories",
        rating:4.4,
        rating_count:"2,16,993",
        review_count:"11,150", 
        discount_price:"15,999",
        actual_price:"20,999",
        offer:"23%"   
    },      {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70",
        mobile_name:"Apple iPhone 16 (teal,128 GB)",
        ram:"128 GB ROM ",
        mb:"15.49 cm (6.1 inch) HD+ Super Retina XDR display",
        camera:"48MP + 12MP | 12MP Front Camera",
        processor:"A18 Chip, 6 Core Processor Processor",
        warrenty:"1 Year Warranty for Phone and 1 year warranty for in Box Accessories",
        rating:4.6,
        rating_count:"19,106",
        review_count:"793", 
        discount_price:"69,999",
        actual_price:"79,900",
        offer:"12%"     
    },
          {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70",
        mobile_name:"Google Pixel 7 (Lemongrass 128 GB)",
        ram:"* GB RAM | 128 GB ROM",
        mb:"16.0 cm (6.3 inch) Full HD+ Display",
        camera:"50MP + 2MP | 8MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"Dimensity 6300 Processor",
        warrenty:"1 Year Warranty for Device and 6 Months for In-Box Accessories",
        rating:4.1,
        rating_count:"16,864",
        review_count:"1,171",
        discount_price:"8,699",
        actual_price:"13,999",
        offer:"37%"   
    },
          {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/p/l/-original-imah2fjcxjdjykpc.jpeg?q=70",
        mobile_name:"Motrola G85 5G (Cobait Blue, 128 GB)",
        ram:"8 GB RAM | 128 GB ROM ",
        mb:"16.94 cm (6.67 inch) Full HD+ Display",
        camera:"50MP + 8MP | 32MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"6s Gen 3 Processor",
        warrenty:"1 Year on Handset and 6 Months on Accessories",
        rating:4.3,
        rating_count:"19,293",
        review_count:"2,111",
        discount_price:"29,999",
        actual_price:"59,999",
        offer:"50%"   
    },
          {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/i/c/-original-imahbfmdzukyctut.jpeg?q=70",
        mobile_name:"MOTROLA Edge 60 Fusion 5G (PANTONE Slipstream, 256 GB)",
        ram:"8 GB RAM | 256 GB ROM ",
        mb:"16.94 cm (6.67 inch) Display",
        camera:"50MP + 13MP | 32MP Front Camera",
        battery:"5500 mAh Battery",
        processor:"Dimensity 7400 Processor",
        charger:"68 Charger",
        warrenty:"1 Year Warranty on Handset and 6 Months Warranty on Accessories",
        rating:4.5,
        rating_count:"41,179",
        review_count:"2,359",
        discount_price:"22,999",
        actual_price:"25,999",
        offer:"11%"  
    },
          {
        img:"	https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70",
        mobile_name:"realme P3* 5G (Midnight Blue,, 128 GB)",
        ram:"6 GB RAM | 128 GB ROM ",
        mb:"17.02 cm (6.72 inch) Full HD+ Display",
        camera:"50MP Rear Camera | 8MP Front Camera",
        battery:"6000 mAh Battery",
        processor:"Dimensity 6400 Processor",
        warrenty:"1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warrenty for Inbox Accessories",
        rating:4.4,
        rating_count:"25,286",
        review_count:"883",
        discount_price:"12,999",
        actual_price:"16,999",
        offer:"23%"  
    },
          {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/c/i/-original-imahawgayvnqkzaz.jpeg?q=70",
        mobile_name:"POCO C71 (Desert Gold, 128 GB)",
        ram:"6 GB RAM | 128 GB ROM | Expandable Upto 2 TB",
        mb:"17.48 cm (6.88 inch) HD+ Display",
        camera:"32MP Rear Camera | 8MP Front Camera",
        battery:"5200 mAh Battery",
        processor:"Unisoc T7250 Max clock speed: 2 x A75@1.8GHz 6 * A55@1.6GHz Processor ",
        warrenty:"1 Year Manufacturer Warranty Phone and 6 Months  Warrenty In the Box Accessories",
        rating:4.4,
        rating_count:"25,286",
        review_count:"883",
        discount_price:"12,999",
        actual_price:"16,999",
        offer:"23%"     
        }      

]     
mobileDetails.forEach(data=>{
    const align_item=document.createElement("div")
    align_item.className="align"
    mobile_container.appendChild(align_item)
    const tag_a=document.createElement("a")
    tag_a.className="total-container"
    align_item.appendChild(tag_a) 
    const img_div=document.createElement("div")
    img_div.className="img-div"
    tag_a.appendChild(img_div)
    const content_div=document.createElement("div")
    content_div.className="content-div"
    tag_a.appendChild(content_div)
    const picture=document.createElement("div")
    picture.className="picture"
    img_div.appendChild(picture)
    const addC=document.createElement("div")
    addC.className="addC"
    img_div.appendChild(addC)
    const love_icon=document.createElement("div")
    love_icon.className="love_icon"
    img_div.appendChild(love_icon)    
    // const img=document.createElement('img')
    // img.classList="mobile-image"
    // picture.appendChild(img)
    picture.innerHTML=`
    <img src=${data.img} class="mobile-image">     
    `  
    addC.innerHTML=`
    <input type="checkbox">
    <p class="compare">Add to Compare </P>
   `
   love_icon.innerHTML=`
   <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="#c2c2c2" opacity=".9"></path></svg>
   `
   const details=document.createElement("div")
   details.className="details"
   content_div.appendChild(details)
    const price=document.createElement("div")                                           
   price.className="price"
   content_div.appendChild(price)
   const phone_name=document.createElement("div")
    phone_name.className="phone-name"  
    details.appendChild(phone_name)
    phone_name.innerHTML=`
    ${data.mobile_name}
    `
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
    const phone_details=document.createElement("div")
    phone_details.className="phone-details";
    details.appendChild(phone_details)
    const ul=document.createElement("ul")
    ul.className="description"
    phone_details.appendChild(ul)  
    ul.innerHTML=`
    <li class="before-item"> ${data.ram}</li>
    <li class="before-item"> ${data.mb}</li>
    <li class="before-item"> ${data.camera}</li>
     <li class="before-item"> ${data.charger}</li>
    <li class="before-item"> ${data.battery}</li>
    <li class="before-item"> ${data.processor}</li>
    <li class="before-item"> ${data.warrenty}</li>
    ` 
    const amount=document.createElement("div")
    amount.className="amount"
    price.appendChild(amount)
    const discount_price=document.createElement("div")
    discount_price.className="discount-price"
    amount.appendChild(discount_price)
    discount_price.innerHTML=` 
        &#8377;${data.discount_price}
    ` 
    const actual_price=document.createElement("div")
    actual_price.className="actual-price"
    amount.appendChild(actual_price)
    actual_price.innerHTML=`
        <span>&#8377;${data.actual_price}</span>
    `
    const offer=document.createElement("div")
     offer.className="offer"
    amount.appendChild(offer)
    offer.innerHTML=`
       ${data.offer} off     
    `
     const offer_img=document.createElement("div")
     offer_img.className="offer-img"
     price.appendChild(offer_img)
     offer_img.innerHTML=`   
      <img  height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png">
     `          
})           