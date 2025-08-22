
const svg = document.getElementById("sidebar-svg")
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
const svg12 = document.getElementById("svg11")
resolution.addEventListener("click", () => {
    if (resolution_sub.style.display == "none") {
        resolution_sub.style.display = "block"
        resolution.style.borderBottom = "none"
        svg12.style.transform = "rotate(90deg)"
    }
    else {
        resolution_sub.style.display = "none"
        resolution.style.borderBottom = "1px solid #f0f0f0"
        svg12.style.transform = "rotate(-90deg)"
    }
})
const os = document.getElementById("os-section")
const os_one = document.getElementById("os")
const svg13 = document.getElementById("svg12")
os.addEventListener("click", () => {
    if (os_one.style.display == "none") {
        os_one.style.display = "block"
        os.style.borderBottom = "none"
    }
    else {
        os_one.style.display = "none"
        resolution.style.borderBottom = "1px solid #f0f0f0"
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
const screen = document.getElementById("screen-section")
const screen_sub = document.getElementById("screen")
const svg7 = document.getElementById("svg6")
screen.addEventListener("click", () => {
    if (screen_sub.style.display == "none") {
        screen_sub.style.display = "block"
        screen.style.borderBottom = "none"
        svg7.style.transform = "rotate(90deg)"
    }
    else {
        screen_sub.style.display = "none"
        screen.style.borderBottom = "1px solid #f0f0f0"
        svg7.style.transform = "rotate(-90deg)"

    }
})
const internal = document.getElementById("internal-section")
const internal_sub = document.getElementById("internal")
const svg5 = document.getElementById("sidebar4-svg")
internal.addEventListener("click", () => {
    if (internal_sub.style.display == "none") {
        internal_sub.style.display = "block"
        internal.style.borderBottom = "none"
        svg5.style.transform = "rotate(90deg)"
    }
    else {
        internal_sub.style.display = "none"
        internal.style.borderBottom = "1px solid #f0f0f0 "
        svg5.style.transform = "rotate(-90deg)"
    }
})
const battery = document.getElementById("battery-section")
const battery_sub = document.getElementById("battery")
const svg6 = document.getElementById("svg5")
battery.addEventListener("click", () => {
    if (battery_sub.style.display == "none") {
        battery_sub.style.display = "block"
        battery.style.borderBottom = "none"
        svg6.style.transform = "rotate(90deg)"
    }
    else {
        battery_sub.style.display = "none"
        battery.style.borderBottom = "1px solid #f0f0f0 "
        svg6.style.transform = "rotate(-90deg)"
    }
})
const primary = document.getElementById("primary-section")
const primary_sub = document.getElementById("primary")
const svg8 = document.getElementById("svg7")
primary.addEventListener("click", () => {
    if (primary_sub.style.display == "none") {
        primary_sub.style.display = "block"
        primary.style.borderBottom = "none"
        svg8.style.transform = "rotate(90deg)"
    }
    else {
        primary_sub.style.display = "none"
        primary.style.borderBottom = "1px solid #f0f0f0 "
        svg8.style.transform = "rotate(-90deg)"
    }
})
const secondary = document.getElementById("secondary-section")
const secondary_sub = document.getElementById("secondary")
const svg9 = document.getElementById("svg8")
secondary.addEventListener("click", () => {
    if (secondary_sub.style.display == "none") {
        secondary_sub.style.display = "block"
        secondary.style.borderBottom = "none"
        svg9.style.transform = "rotate(90deg)"
    }
    else {
        secondary_sub.style.display = "none"
        secondary.style.borderBottom = "1px solid #f0f0f0 "
        svg9.style.transform = "rotate(-90deg)"
    }
})
const processor = document.getElementById("processor-section")
const processor_sub = document.getElementById("processor")
const svg10 = document.getElementById("svg9")
processor.addEventListener("click", () => {
    if (processor_sub.style.display == "none") {
        processor_sub.style.display = "block"
        processor.style.borderBottom = "none"
        svg10.style.transform = "rotate(90deg)"
    }
    else {
        processor_sub.style.display = "none"
        processor.style.borderBottom = "1px solid #f0f0f0 "
        svg10.style.transform = "rotate(-90deg)"
    }
})
const speciality = document.getElementById("speciality-section")
const speciality_sub = document.getElementById("speciality")
const svg11 = document.getElementById("svg10")
speciality.addEventListener("click", () => {
    if (speciality_sub.style.display == "none") {
        speciality_sub.style.display = "block"
        speciality.style.borderBottom = "none"
        svg11.style.transform = "rotate(90deg)"
    }
    else {
        speciality_sub.style.display = "none"
        processor.style.borderBottom = "1px solid #f0f0f0 "
        svg11.style.transform = "rotate(-90deg)"
    }
})
const rating = document.getElementById("rating")
console.log(rating)
const rating_chart = document.getElementById("rating-chart")
const svg2 = document.getElementById("sidebar1-svg")
rating.addEventListener("click", () => {
    if (rating_chart.style.display === "none") {
        rating_chart.style.display = "block"
        rating.style.borderBottom = "none"
        svg2.style.transform = "rotate(90deg)"
    }
    else {
        rating_chart.style.display = "none"
        rating.style.borderBottom = "1px solid #f0f0f0"
        svg2.style.transform = "rotate(-90deg)"
    }
})

const ram = document.getElementById("ram")
const ram_child = document.getElementById("ram-child")
const svg4 = document.getElementById("sidebar3-svg")

ram.addEventListener("click", () => {
    if (ram_child.style.display == "none") {
        ram_child.style.display = "block"
        ram.style.borderBottom = "none"
        svg4.style.transform = "rotate(90deg)"
    }
    else {
        ram_child.style.display = "none"
        ram.style.borderBottom = "1px solid #f0f0f0"
        svg4.style.transform = "rotate(-90deg)"
    }
})

const gst = document.getElementById("gst")
const gst_check = document.getElementById("gst-check")
const svg3 = document.getElementById("sidebar2-svg")
gst.addEventListener("click", () => {
    if (gst_check.style.display == "none") {
        gst_check.style.display = "block"
        gst.style.borderBottom = "none"
        svg3.style.transform = "rotate(90deg)"
    }  
    else {
        gst_check.style.display = "none"
        gst.style.borderBottom = "1px solid #f0f0f0"
        svg3.style.transform = "rotate(-90deg)"
    }
})
const brand = document.getElementById("brand-section")
const brand_sub = document.getElementById("brand-sub")
brand.addEventListener("click", () => {       
    if (brand_sub.style.display == "none") {
        brand_sub.style.display = "block"
        brand.style.borderBottom = "none"
        svg.style.transform = "rotate(90deg)"
    }   
    else { 
        brand_sub.style.display = "none"
        brand.style.borderBottom = "1px solid #f0f0f0"
        svg.style.transform = "rotate(-90deg)"
    }
})

const electronics = document.getElementById("electronics")
const electronic_slide = document.getElementById("electronic-slide")
electronics.addEventListener("mouseenter", () => {
    electronic_slide.style.display = "flex"
})
electronics.addEventListener("mouseleave", () => {
    electronic_slide.style.display = "none"
})
electronic_slide.addEventListener("mouseenter", () => {
    electronic_slide.style.display = "flex"
})
electronic_slide.addEventListener("mouseleave", () => {
    electronic_slide.style.display = "none"
}) 
// electronics.addEventListener("mouseleave",()=>{
//     electronic_slide.style.display="none"
// })   
const tv = document.getElementById("tv")
console.log(tv)
const tv_slide = document.getElementById("tv-Slide")
console.log(tv_slide)
tv.addEventListener("mouseenter", () => {
    tv_slide.style.display = "flex"
    tv_slide.addEventListener("mouseenter", () => {
        tv_slide.style.display = 'flex'
    })
    tv_slide.addEventListener("mouseleave", () => {
        tv_slide.style.display = "none"
    })
})

const men = document.getElementById("men")
console.log(tv)
const slide = document.getElementById("tv-Slide")
console.log(slide)
men.addEventListener("mouseenter", () => {
    slide.style.display = "flex"
    slide.addEventListener("mouseenter", () => {
        slide.style.display = 'flex'
    })
    slide.addEventListener("mouseleave", () => {
        slide.style.display = "none"
    })
})
const mobile_container = document.getElementsByClassName("mobile-container")[0]
console.log(mobile_container)
const popularity = document.getElementById("popularity")
popularity.style.color = "#2874f0"  
popularity.style.fontWeight = 500;
popularity.style.borderBottom = "2px solid #2874f0"

const click_content = document.querySelectorAll(".pop")
click_content.forEach(item => {
    item.addEventListener("click", () => {
        click_content.forEach(item => {
            item.style = ""
        }) 
        item.style.color = "#2874f0";
        item.style.cursor = "default";
        item.style.borderBottom = "2px solid #2874f0"
        item.style.fontWeight = 500;
    })
})

const login = document.getElementById("login")
const login_menu = document.getElementById("login-menu")
login.addEventListener("mouseover", () => {
    login_menu.style.display = "block"
})
login.addEventListener("mouseout", () => { 
    login_menu.style.display = "none" 
}) 


const ratingCheck=document.querySelectorAll(".ratingCheck")

let allCat=[]    
let allProducts=[]
  
fetch("data.json")      
.then(res=>res.json()) 
.then(data=>{ 
    allProducts=data;
    displayProduct(allProducts)
   
})
function displayProduct(products){   
       mobile_container.innerHTML="";
       if(products.length==0){
        mobile_container.innerHTML="<p>No Products found </p>"
       }
       products.forEach(element => {   
        const align_item = document.createElement("div") 
        align_item.className = "align"   
        mobile_container.appendChild(align_item) 
        const tag_a = document.createElement("a")                
        tag_a.className = "total-container"  
        align_item.appendChild(tag_a)  
        const img_div = document.createElement("div")
        img_div.className = "img-div"
        tag_a.appendChild(img_div) 
        const content_div = document.createElement("div")
        content_div.className = "content-div"
        tag_a.appendChild(content_div)
        const picture = document.createElement("div")
        picture.className = "picture"
        img_div.appendChild(picture)  
        const addC = document.createElement("div")
        addC.className = "addC"
        img_div.appendChild(addC)
        const love_icon = document.createElement("div")
        love_icon.className = "love_icon"
        img_div.appendChild(love_icon)  
        picture.innerHTML = `
        <img src=${element.img} class="mobile-image">     
        `
        addC.innerHTML = `
        <input type="checkbox">
        <p class="compare">Add to Compare </P>    
        `
        love_icon.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="#c2c2c2" opacity=".9"></path></svg>
        `
        const details = document.createElement("div")
        details.className = "details"
        content_div.appendChild(details)
        const price = document.createElement("div")
        price.className = "price" 
        content_div.appendChild(price)
        const phone_name = document.createElement("div")
        phone_name.className = "phone-name"
        details.appendChild(phone_name)  
        details.innerHTML = `
        <svg width="62" height="18" xmlns="http://www.w3.org/2000/svg" class=""><rect width="62" height="18" fill="white"></rect><path d="M5.82955 6.45455C5.77841 6.02273 5.57102 5.6875 5.20739 5.44886C4.84375 5.21023 4.39773 5.09091 3.86932 5.09091C3.48295 5.09091 3.14489 5.15341 2.85511 5.27841C2.56818 5.40341 2.34375 5.57528 2.18182 5.79403C2.02273 6.01278 1.94318 6.26136 1.94318 6.53977C1.94318 6.77273 1.99858 6.97301 2.10938 7.14062C2.22301 7.3054 2.3679 7.44318 2.54403 7.55398C2.72017 7.66193 2.90483 7.75142 3.09801 7.82244C3.29119 7.89062 3.46875 7.94602 3.63068 7.98864L4.51705 8.22727C4.74432 8.28693 4.99716 8.36932 5.27557 8.47443C5.55682 8.57955 5.82528 8.72301 6.08097 8.90483C6.33949 9.08381 6.55256 9.31392 6.72017 9.59517C6.88778 9.87642 6.97159 10.2216 6.97159 10.6307C6.97159 11.1023 6.84801 11.5284 6.60085 11.9091C6.35653 12.2898 5.99858 12.5923 5.52699 12.8168C5.05824 13.0412 4.48864 13.1534 3.81818 13.1534C3.19318 13.1534 2.65199 13.0526 2.1946 12.8509C1.74006 12.6491 1.3821 12.3679 1.12074 12.0071C0.862216 11.6463 0.715909 11.2273 0.681818 10.75H1.77273C1.80114 11.0795 1.91193 11.3523 2.10511 11.5682C2.30114 11.7812 2.5483 11.9403 2.84659 12.0455C3.14773 12.1477 3.47159 12.1989 3.81818 12.1989C4.22159 12.1989 4.58381 12.1335 4.90483 12.0028C5.22585 11.8693 5.48011 11.6847 5.66761 11.4489C5.85511 11.2102 5.94886 10.9318 5.94886 10.6136C5.94886 10.3239 5.8679 10.0881 5.70597 9.90625C5.54403 9.72443 5.33097 9.5767 5.06676 9.46307C4.80256 9.34943 4.51705 9.25 4.21023 9.16477L3.13636 8.85795C2.45455 8.66193 1.91477 8.3821 1.51705 8.01847C1.11932 7.65483 0.920455 7.17898 0.920455 6.59091C0.920455 6.10227 1.05256 5.67614 1.31676 5.3125C1.58381 4.94602 1.94176 4.66193 2.39062 4.46023C2.84233 4.25568 3.34659 4.15341 3.90341 4.15341C4.46591 4.15341 4.96591 4.25426 5.40341 4.45597C5.84091 4.65483 6.1875 4.92756 6.44318 5.27415C6.7017 5.62074 6.83807 6.0142 6.85227 6.45455H5.82955ZM8.5728 15.4545V6.45455H9.54439V7.49432H9.66371C9.73757 7.38068 9.83984 7.2358 9.97053 7.05966C10.104 6.88068 10.2944 6.72159 10.5415 6.58239C10.7915 6.44034 11.1296 6.36932 11.5558 6.36932C12.1069 6.36932 12.5927 6.5071 13.0131 6.78267C13.4336 7.05824 13.7617 7.44886 13.9975 7.95455C14.2333 8.46023 14.3512 9.05682 14.3512 9.74432C14.3512 10.4375 14.2333 11.0384 13.9975 11.5469C13.7617 12.0526 13.435 12.4446 13.0174 12.723C12.5998 12.9986 12.1183 13.1364 11.5728 13.1364C11.1523 13.1364 10.8157 13.0668 10.5629 12.9276C10.31 12.7855 10.1154 12.625 9.97905 12.446C9.84268 12.2642 9.73757 12.1136 9.66371 11.9943H9.57848V15.4545H8.5728ZM9.56143 9.72727C9.56143 10.2216 9.63388 10.6577 9.77876 11.0355C9.92365 11.4105 10.1353 11.7045 10.4137 11.9176C10.6921 12.1278 11.033 12.233 11.4364 12.233C11.8569 12.233 12.2077 12.1222 12.489 11.9006C12.7731 11.6761 12.9862 11.375 13.1282 10.9972C13.2731 10.6165 13.3455 10.1932 13.3455 9.72727C13.3455 9.26705 13.2745 8.85227 13.1325 8.48295C12.9933 8.1108 12.7816 7.81676 12.4975 7.60085C12.2163 7.3821 11.8626 7.27273 11.4364 7.27273C11.0273 7.27273 10.6836 7.37642 10.4052 7.58381C10.1268 7.78835 9.91655 8.07528 9.7745 8.4446C9.63246 8.81108 9.56143 9.23864 9.56143 9.72727ZM18.5444 13.1364C17.9535 13.1364 17.435 12.9957 16.989 12.7145C16.5458 12.4332 16.1992 12.0398 15.9492 11.5341C15.7021 11.0284 15.5785 10.4375 15.5785 9.76136C15.5785 9.07955 15.7021 8.48437 15.9492 7.97585C16.1992 7.46733 16.5458 7.07244 16.989 6.79119C17.435 6.50994 17.9535 6.36932 18.5444 6.36932C19.1353 6.36932 19.6523 6.50994 20.0955 6.79119C20.5415 7.07244 20.8881 7.46733 21.1353 7.97585C21.3853 8.48437 21.5103 9.07955 21.5103 9.76136C21.5103 10.4375 21.3853 11.0284 21.1353 11.5341C20.8881 12.0398 20.5415 12.4332 20.0955 12.7145C19.6523 12.9957 19.1353 13.1364 18.5444 13.1364ZM18.5444 12.233C18.9933 12.233 19.3626 12.1179 19.6523 11.8878C19.9421 11.6577 20.1566 11.3551 20.2958 10.9801C20.435 10.6051 20.5046 10.1989 20.5046 9.76136C20.5046 9.32386 20.435 8.91619 20.2958 8.53835C20.1566 8.16051 19.9421 7.85511 19.6523 7.62216C19.3626 7.3892 18.9933 7.27273 18.5444 7.27273C18.0955 7.27273 17.7262 7.3892 17.4364 7.62216C17.1467 7.85511 16.9322 8.16051 16.793 8.53835C16.6538 8.91619 16.5842 9.32386 16.5842 9.76136C16.5842 10.1989 16.6538 10.6051 16.793 10.9801C16.9322 11.3551 17.1467 11.6577 17.4364 11.8878C17.7262 12.1179 18.0955 12.233 18.5444 12.233ZM24.0511 9.0625V13H23.0455V6.45455H24.017V7.47727H24.1023C24.2557 7.14489 24.4886 6.87784 24.8011 6.67614C25.1136 6.47159 25.517 6.36932 26.0114 6.36932C26.4545 6.36932 26.8423 6.46023 27.1747 6.64205C27.5071 6.82102 27.7656 7.09375 27.9503 7.46023C28.1349 7.82386 28.2273 8.28409 28.2273 8.84091V13H27.2216V8.90909C27.2216 8.39489 27.0881 7.99432 26.821 7.70739C26.554 7.41761 26.1875 7.27273 25.7216 7.27273C25.4006 7.27273 25.1136 7.34233 24.8608 7.48153C24.6108 7.62074 24.4134 7.82386 24.2685 8.09091C24.1236 8.35795 24.0511 8.68182 24.0511 9.0625ZM34.7013 7.92045L33.7979 8.17614C33.7411 8.02557 33.6573 7.87926 33.5465 7.73722C33.4386 7.59233 33.2908 7.47301 33.1033 7.37926C32.9158 7.28551 32.6758 7.23864 32.3832 7.23864C31.9826 7.23864 31.6488 7.33097 31.3817 7.51562C31.1175 7.69744 30.9854 7.92898 30.9854 8.21023C30.9854 8.46023 31.0763 8.65767 31.2582 8.80256C31.44 8.94744 31.7241 9.06818 32.1104 9.16477L33.082 9.40341C33.6673 9.54545 34.1033 9.76278 34.3903 10.0554C34.6772 10.3452 34.8207 10.7187 34.8207 11.1761C34.8207 11.5511 34.7127 11.8864 34.4968 12.1818C34.2837 12.4773 33.9854 12.7102 33.6019 12.8807C33.2184 13.0511 32.7724 13.1364 32.2638 13.1364C31.5962 13.1364 31.0437 12.9915 30.6062 12.7017C30.1687 12.4119 29.8917 11.9886 29.7752 11.4318L30.7298 11.1932C30.8207 11.5455 30.9925 11.8097 31.2454 11.9858C31.5011 12.1619 31.8349 12.25 32.2468 12.25C32.7156 12.25 33.0877 12.1506 33.3633 11.9517C33.6417 11.75 33.7809 11.5085 33.7809 11.2273C33.7809 11 33.7013 10.8097 33.5423 10.6562C33.3832 10.5 33.1388 10.3835 32.8093 10.3068L31.7184 10.0511C31.119 9.90909 30.6786 9.68892 30.3974 9.39062C30.119 9.08949 29.9798 8.71307 29.9798 8.26136C29.9798 7.89205 30.0835 7.56534 30.2908 7.28125C30.5011 6.99716 30.7866 6.77415 31.1474 6.61222C31.511 6.45028 31.9229 6.36932 32.3832 6.36932C33.0309 6.36932 33.5394 6.51136 33.9087 6.79545C34.2809 7.07955 34.5451 7.45455 34.7013 7.92045ZM38.9936 13.1364C38.4027 13.1364 37.8842 12.9957 37.4382 12.7145C36.995 12.4332 36.6484 12.0398 36.3984 11.5341C36.1513 11.0284 36.0277 10.4375 36.0277 9.76136C36.0277 9.07955 36.1513 8.48437 36.3984 7.97585C36.6484 7.46733 36.995 7.07244 37.4382 6.79119C37.8842 6.50994 38.4027 6.36932 38.9936 6.36932C39.5845 6.36932 40.1016 6.50994 40.5447 6.79119C40.9908 7.07244 41.3374 7.46733 41.5845 7.97585C41.8345 8.48437 41.9595 9.07955 41.9595 9.76136C41.9595 10.4375 41.8345 11.0284 41.5845 11.5341C41.3374 12.0398 40.9908 12.4332 40.5447 12.7145C40.1016 12.9957 39.5845 13.1364 38.9936 13.1364ZM38.9936 12.233C39.4425 12.233 39.8118 12.1179 40.1016 11.8878C40.3913 11.6577 40.6058 11.3551 40.745 10.9801C40.8842 10.6051 40.9538 10.1989 40.9538 9.76136C40.9538 9.32386 40.8842 8.91619 40.745 8.53835C40.6058 8.16051 40.3913 7.85511 40.1016 7.62216C39.8118 7.3892 39.4425 7.27273 38.9936 7.27273C38.5447 7.27273 38.1754 7.3892 37.8857 7.62216C37.5959 7.85511 37.3814 8.16051 37.2422 8.53835C37.103 8.91619 37.0334 9.32386 37.0334 9.76136C37.0334 10.1989 37.103 10.6051 37.2422 10.9801C37.3814 11.3551 37.5959 11.6577 37.8857 11.8878C38.1754 12.1179 38.5447 12.233 38.9936 12.233ZM43.4947 13V6.45455H44.4663V7.44318H44.5344C44.6538 7.11932 44.8697 6.85653 45.1822 6.65483C45.4947 6.45312 45.8469 6.35227 46.239 6.35227C46.3129 6.35227 46.4052 6.35369 46.516 6.35653C46.6268 6.35937 46.7106 6.36364 46.7674 6.36932V7.39205C46.7333 7.38352 46.6552 7.37074 46.533 7.35369C46.4137 7.33381 46.2873 7.32386 46.1538 7.32386C45.8356 7.32386 45.5515 7.39062 45.3015 7.52415C45.0543 7.65483 44.8583 7.83665 44.7134 8.0696C44.5714 8.29972 44.5004 8.5625 44.5004 8.85795V13H43.4947ZM50.5046 13.1364C49.8739 13.1364 49.3299 12.9972 48.8725 12.7188C48.418 12.4375 48.0671 12.0455 47.82 11.5426C47.5756 11.0369 47.4535 10.4489 47.4535 9.77841C47.4535 9.10795 47.5756 8.51705 47.82 8.00568C48.0671 7.49148 48.4109 7.09091 48.8512 6.80398C49.2944 6.5142 49.8114 6.36932 50.4023 6.36932C50.7433 6.36932 51.0799 6.42614 51.4123 6.53977C51.7447 6.65341 52.0472 6.83807 52.32 7.09375C52.5927 7.34659 52.81 7.68182 52.9719 8.09943C53.1339 8.51705 53.2148 9.03125 53.2148 9.64205V10.0682H48.1694V9.19886H52.1921C52.1921 8.82955 52.1183 8.5 51.9705 8.21023C51.8256 7.92045 51.6183 7.69176 51.3484 7.52415C51.0813 7.35653 50.766 7.27273 50.4023 7.27273C50.0018 7.27273 49.6552 7.37216 49.3626 7.57102C49.0728 7.76705 48.8498 8.02273 48.6935 8.33807C48.5373 8.65341 48.4592 8.99148 48.4592 9.35227V9.93182C48.4592 10.4261 48.5444 10.8452 48.7148 11.1889C48.8881 11.5298 49.1282 11.7898 49.435 11.9688C49.7418 12.1449 50.0984 12.233 50.5046 12.233C50.7688 12.233 51.0075 12.196 51.2205 12.1222C51.4364 12.0455 51.6225 11.9318 51.7788 11.7812C51.935 11.6278 52.0558 11.4375 52.141 11.2102L53.1126 11.483C53.0103 11.8125 52.8384 12.1023 52.5969 12.3523C52.3555 12.5994 52.0572 12.7926 51.7021 12.9318C51.3469 13.0682 50.9478 13.1364 50.5046 13.1364ZM57.2163 13.1364C56.6708 13.1364 56.1893 12.9986 55.7717 12.723C55.354 12.4446 55.0273 12.0526 54.7915 11.5469C54.5558 11.0384 54.4379 10.4375 54.4379 9.74432C54.4379 9.05682 54.5558 8.46023 54.7915 7.95455C55.0273 7.44886 55.3555 7.05824 55.7759 6.78267C56.1964 6.5071 56.6822 6.36932 57.2333 6.36932C57.6594 6.36932 57.9961 6.44034 58.2433 6.58239C58.4933 6.72159 58.6836 6.88068 58.8143 7.05966C58.9478 7.2358 59.0515 7.38068 59.1254 7.49432H59.2106V4.27273H60.2163V13H59.2447V11.9943H59.1254C59.0515 12.1136 58.9464 12.2642 58.81 12.446C58.6737 12.625 58.479 12.7855 58.2262 12.9276C57.9734 13.0668 57.6367 13.1364 57.2163 13.1364ZM57.3526 12.233C57.756 12.233 58.0969 12.1278 58.3754 11.9176C58.6538 11.7045 58.8654 11.4105 59.0103 11.0355C59.1552 10.6577 59.2276 10.2216 59.2276 9.72727C59.2276 9.23864 59.1566 8.81108 59.0146 8.4446C58.8725 8.07528 58.6623 7.78835 58.3839 7.58381C58.1055 7.37642 57.7617 7.27273 57.3526 7.27273C56.9265 7.27273 56.5714 7.3821 56.2873 7.60085C56.006 7.81676 55.7944 8.1108 55.6523 8.48295C55.5131 8.85227 55.4435 9.26705 55.4435 9.72727C55.4435 10.1932 55.5146 10.6165 55.6566 10.9972C55.8015 11.375 56.0146 11.6761 56.2958 11.9006C56.5799 12.1222 56.9322 12.233 57.3526 12.233Z" fill="#9E9E9E"></path></svg>
        <div class="phone-name">${element.mobile_name} </div>`
        const rating_section = document.createElement("div")
        rating_section.className = "rating-section"
        details.appendChild(rating_section)
        const rating_icon = document.createElement("p")
        rating_icon.className = "rating-icon"
        rating_section.appendChild(rating_icon) 
         rating_icon.innerHTML = `
         ${element.rating}   
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" fill="#fff" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847 1.417 8.267L12 18.896l-7.417 4.971L6 15.6 0 9.753l8.332-1.735z"/>
         </svg>                  
        `
        const rating_count = document.createElement("p")
        rating_count.className = "rating-count"   
        rating_section.appendChild(rating_count)
        rating_count.innerHTML = `
        ${element.rating_count} Ratings & ${element.rating_count} Reviews
        `
        const phone_details = document.createElement("div")
        phone_details.className = "phone-details";
        details.appendChild(phone_details)
        const ul = document.createElement("ul")
        ul.className = "description"
        phone_details.appendChild(ul)
        ul.innerHTML = `
        <li class="before-item"> ${element.ram}</li>
        <li class="before-item"> ${element.mb}</li>
        <li class="before-item"> ${element.camera}</li> 
        <li class="before-item"> ${element.charger}</li>
        <li class="before-item"> ${element.battery}</li>
        <li class="before-item"> ${element.processor}</li>
        <li class="before-item"> ${element.warrenty}</li>
        `
        const amount = document.createElement("div")
        amount.className = "amount"  
        price.appendChild(amount)
        const discount_price = document.createElement("div")
        discount_price.className = "discount-price"
        amount.appendChild(discount_price)
        const d_price=document.createElement("div")
        d_price.className="discPrice"
        discount_price.appendChild(d_price) 
        d_price.innerHTML = `   
        &#8377;${element.discount_price}   
       `
        const assuered_img=document.createElement("div")
         assuered_img.className="assured_img"
         discount_price.appendChild(assuered_img)
         assuered_img.innerHTML=`
         <img src=${element.image_assured} height=21 alt="">`
        const actual_price = document.createElement("div")
        actual_price.className = "actual-price"
        amount.appendChild(actual_price) 
        actual_price.innerHTML = `    
        <span>&#8377;${element.actual_price}</span> 
    `  
        const offer = document.createElement("div")
        offer.className = "offer"
        amount.appendChild(offer)
        offer.innerHTML = `    
       ${element.offer} off    
    `  
        const exchange = document.createElement('div')
        exchange.className = "exchange" 
        amount.appendChild(exchange) 
        exchange.innerHTML = `  
        Upto &#8377; <span class="exchange-price">${element.exchange}</span> Off on Exchange`
        const offer_img = document.createElement("div")
        offer_img.className = "offer-img" 
        price.appendChild(offer_img)
        offer_img.innerHTML = `   
        <img  height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
       ` 
    }) 
}
const clearAll=document.getElementById("clearAll")
const clear=document.getElementById("clear-section") 
const filterClear=document.getElementById("clear")
const brandClear=document.getElementById("brandClear")
const brandClear_Sub=document.getElementById("brandClear-sub")
const  phonebrandName=document.getElementById("phonebrandName")    
const brandnameClear=document.getElementById("brandnameClear")
const checkboxes=document.querySelectorAll("#brand-name input[type='checkbox']") 
checkboxes.forEach(checkbox => {   
  checkbox.addEventListener("change", () => {
    const selectedBrand=Array.from(checkboxes)
        .filter(cb=>cb.checked)    
        .map(cb=>cb.value)
         clearAll.style.display=selectedBrand?"block":"none"
         filterClear.style.display=selectedBrand?"block":"none"
         brandClear_Sub.style.display=selectedBrand?"block":"none"
         brandClear_Sub.innerHTML=" "
         selectedBrand.forEach(brand=>{
             const filter=document.createElement("div")
             filter.className="filter-style"  
             brandClear_Sub.appendChild(filter) 
             filter.innerHTML=""       
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${brand}</span>`
            filter.addEventListener("click",()=>{
                const selectedCheckbox=Array.from(checkboxes).find(cb=>cb.value==brand)
                console.log(selectedCheckbox) 
                clearAll.style.display="none" 
                if(selectedCheckbox){
                    selectedCheckbox.checked=false    
                }  
                filter.remove()
                const updatedCheckbox=Array.from(checkboxes)
                .filter(cb=>cb.checked)
                .map(cb=>cb.value)
                console.log(updatedCheckbox)
                if(updatedCheckbox.length==0){
                    displayProduct(allProducts)
                }
                else{
                    const filtered=allProducts.filter(brand=>updatedCheckbox.includes(brand.brand))
                    displayProduct(filtered)
                }
            })       
  
        }) 
        
    
        if(selectedBrand==0){
            displayProduct(allProducts)
        }
        else{
            const filtered=allProducts.filter(brand=>selectedBrand.includes(brand.brand))
            displayProduct(filtered) 
        }           
    
     })
})
   
    


clearAll.addEventListener("click",()=>{   
   checkboxes.forEach(cb=>cb.checked=false);  
   displayProduct(allProducts)  
   clearAll.style.display="none"
   filterClear.style.display="none"
   brandClear.style.display="none"
   brandClear_Sub.style.display="none" 
})   

// const minimumPrice=document.getElementById("minimum_price")
// console.log(minimumPrice)
// const maximumPrice=document.getElementById("maximum_price")
// console.log(maximumPrice) 
// minimumPriceghuduhuhuhnini
// const assuredfilter=document.querySelectorAll(".assured-icon")
// console.log9assuredfilte
//  
const clear_all=document.getElementById("clear_all")
const ratingCheckbox=document.querySelectorAll("#rating-chart input[type=checkbox]")
const ratingClear_sub=document.getElementById("RatingClear-sub")
ratingCheckbox.forEach(checkbox=>{
     checkbox.addEventListener("change",()=>{
        const selectedRating=Array.from(ratingCheckbox)
        .filter(cb=>cb.checked)    
        .map(cb=>cb.value)
         clear_all.style.display=selectedRating?"block":"none"
         filterClear.style.display=selectedRating?"block":"none"
         ratingClear_sub.style.display=selectedRating?"block":"none"
         console.log(selectedRating) 
        ratingClear_sub.innerHTML=""
        selectedRating.forEach(rating=>{
             const filter=document.createElement("div")
             filter.className="filter-style" 
             ratingClear_sub.appendChild(filter)  
             filter.innerHTML=""  
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${rating}★ &amp; above</span>`
              filter.addEventListener("click",()=>{
                 const selectedCheckbox=Array.from(ratingCheckbox).find(cb=>cb.value==rating)
                 if(selectedCheckbox){
                    selectedCheckbox.checked=false
                 }
                 filter.remove()
                 const updatedCheckbox=Array.from(ratingCheckbox) 
                 .filter(cb=>cb.checked)
                 .map(cb=>cb.value)
                 const min=Math.min(...selectedRating)
                 if(updatedCheckbox.length==0){
                    displayProduct(allProducts) 
                    clear_all.style.display="none" 
                 } 
                 else{
                  const filtered=allProducts.filter(p=>p.rating>=min)
                  displayProduct(filtered) 
                 }  
              })        
  
        })
        const min=Math.min(...selectedRating)
        if(selectedRating.length==0){
            displayProduct(allProducts) 
            clear_all.style.display="none"
        }   
        else{
            const filtered=allProducts.filter(p=>p.rating>=min)
            displayProduct(filtered)
            window.scroll({
                top:0
            })
            rating_chart.style.display="none";
            svg2.style.transform = "rotate(-90deg)"
        }
     })
})  
clear_all.addEventListener("click",()=>{
    ratingCheckbox.forEach(checkbox=>checkbox.checked=false)
    displayProduct(allProducts)
    clear_all.style.display="none" 
    filterClear.style.display="none" 
    ratingClear_sub.style.display="none"
    window.scroll({
        top:0
    })

})
 
const assuredCheckbox=document.querySelectorAll(".assured-icon input[type=checkbox]")
const assuredClear=document.getElementById("assuredClear");
const assuredClear_sub=document.getElementById("assuredClear-sub")
assuredCheckbox.forEach(cb=>{
    cb.addEventListener("change",()=>{
        const selectedAssured=Array.from(assuredCheckbox)
        .filter(cb=>cb.checked)    
        .map(cb=>cb.value)
         console.log(selectedAssured)
        filterClear.style.display=selectedAssured?"block":"none"; 
        assuredClear_sub.style.display=selectedAssured?"block":"none";
        assuredClear_sub.innerHTML=""
        selectedAssured.forEach(assured=>{   
             const filter=document.createElement("div")
             filter.className="filter-style" 
             assuredClear_sub.appendChild(filter) 
             filter.innerHTML=""       
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${assured}</span>`  
            filter.addEventListener("click",()=>{
                const selectedChekbox=Array.from(assuredCheckbox).find(cb=>cb.value==assured)
                if(selectedAssured){
                    selectedAssured.checked=false;
                }
                const updatedCheckbox=Array.from(assuredCheckbox)
                .filter(cb=>cb.checked)
                .map(cb=>cb.value)
                if(updatedCheckbox.lngth==0){ 
                    displayProduct(allProducts)
                }
                else{
                    const filtered=allProducts.filter(checkbox=>updatedCheckbox.includes(checkbox.assured))
                    displayProduct(filtered)
                }
           })  
        })
       if(selectedAssured.length==0){
        displayProduct(allProducts)
       }
       else{
        const filtered=allProducts.filter(checkbox=>selectedAssured.includes(checkbox.assured))
        displayProduct(filtered)
        window.scroll({
            top:0
        }) 
       }
    })   
}) 
const gstCheck=document.querySelectorAll("#gst-check input[type=checkbox]")
const cleargst=document.getElementById("cleargst")
const gstClear_sub=document.getElementById("gstClear-sub")
gstCheck.forEach(checkbox=>{
     checkbox.addEventListener("change",()=>{
        const selectedGst=Array.from(gstCheck) 
        .filter(cb=>cb.checked)    
        .map(cb=>cb.value)
        
        cleargst.style.display=selectedGst?"block":"none";
        gstClear_sub.style.display=selectedGst?"block":"none";
        filterClear.style.display=selectedGst?"block":"none";
        gstClear_sub.innerHTML=""
        selectedGst.forEach(gst=>{   
             const filter=document.createElement("div")
             filter.className="filter-style" 
             gstClear_sub.appendChild(filter) 
             filter.innerHTML=""  
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${gst}</span>`  
              filter.addEventListener("click",()=>{
                 const selectedCheckbox=Array.from(gstCheck).find(cb=>cb.value==gst)
                if(selectedCheckbox){
                   selectedCheckbox.checked=false
                }
                filter.remove()
               const updatedCheckbox=Array.from()
                  .filter(cb=>cb.checked)
                  .map(cb=>cb.value)
                  console.log(updatedCheckbox)
                  if(updatedCheckbox.length==0){
                    displayProduct(allProducts)
                    cleargst.style.display="none"
                  }
              }) 

        })   
       if(selectedGst.length==0){  
        displayProduct(allProducts)  
        cleargst.style.display="none"
       }  
       else{  
        const filtered=allProducts.filter(checkbox=>selectedGst.includes(checkbox.gst_invoice))
        displayProduct(filtered)
        window.scroll({ 
            top:0
        })   
         gst_check.style.display="none";
         svg3.style.transform = "rotate(-90deg)"
       }
    }) 
    
}) 
 
cleargst.addEventListener("click",()=>{
   gstCheck.forEach(checkbox=>checkbox.checked=false)
   displayProduct(allProducts) 
    filterClear.style.display="none"       
    cleargst.style.display="none";   
    gstClear_sub.style.display="none" 
    window.scroll({  
        top:0 
    })

})

const ramCheckbox=document.querySelectorAll("#ram-child input[type=checkbox]")
const ramClear_sub=document.getElementById("ramClear-sub")
const ramClear=document.getElementById("clearRam") 
ramCheckbox.forEach(checkbox=>{
    checkbox.addEventListener("change",()=>{
         const selectedRam=Array.from(ramCheckbox)
         .filter(cb=>cb.checked)
         .map(cb=>cb.value)
         filterClear.style.display=selectedRam?"block":"none"
         ramClear_sub.style.display=selectedRam?"block":"none"
         ramClear.style.display=selectedRam?"block":"none"
          ramClear_sub.innerHTML=""
          selectedRam.forEach(ram=>{
             const filter=document.createElement("div")
             filter.className="filter-style" 
             ramClear_sub.appendChild(filter) 
             filter.innerHTML=""  
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${ram}</span>`  
              filter.addEventListener("click",()=>{
                const selectedCheckbox=Array.from(ramCheckbox).find(cb=>cb.value==ram)
                if(selectedCheckbox){
                    selectedCheckbox.checked=false
                }
                filter.remove()
                const updatedCheckbox=Array.from(ramCheckbox)
                .filter(cb=>cb.checked)
                .map(cb=>cb.value)
                 if(updatedCheckbox.length==0){
                    displayProduct(allProducts)
                    ramClear.style.display="none"
                 }
                 else{
                    const filtered=allProducts.filter(checkbox=>updatedCheckbox.includes(checkbox.ram_check))
                    displayProduct(filtered)
                 }
              })        
          }) 
          if(selectedRam.length==0){    
            displayProduct(allProducts)
             ramClear.style.display="none" 
            svg4.style.transform = "rotate(-90deg)"
            window.scroll({
                top:0
            })
 
          }
          else{
            const filtered=allProducts.filter(checkbox=>selectedRam.includes(checkbox.ram_check))
            displayProduct(filtered)   
            window.scroll({ 
                top:0      
            })
            ram_child.style.display="none";
            svg4.style.transform = "rotate(-90deg)"
            
          }   
           
    })
})
ramClear.addEventListener("click",()=>{
   ramCheckbox.forEach(checkbox=>checkbox.checked=false)
   displayProduct(allProducts)
    filterClear.style.display="none"     
    ramClear.style.display="none";   
    ramClear_sub.style.display="none"
    window.scroll({
        top:0 
    })

})
const internal_checkbox=document.querySelectorAll("#internal input[type='checkbox']")
const internalClear_sub=document.getElementById("internalClear-sub")
const clearInternal=document.getElementById("clearInternal")

internal_checkbox.forEach(checkbox=>{
    checkbox.addEventListener("change",()=>{
         const selectedInternal=Array.from(internal_checkbox)
         .filter(cb=>cb.checked)
         .map(cb=>cb.value)
       
         filterClear.style.display=selectedInternal?"block":"none"
         internalClear_sub.style.display=selectedInternal?"block":"none"
         clearInternal.style.display=selectedInternal?"block":"none"
          internalClear_sub.innerHTML=""
          selectedInternal.forEach(internal=>{
             const filter=document.createElement("div")
             filter.className="filter-style" 
             internalClear_sub.appendChild(filter)
             filter.innerHTML=""  
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${internal}</span>`  
                filter.addEventListener("click",()=>{
                const selectedChekbox=Array.from(internal_checkbox).find(cb=>cb.value==internal)
                console.log(selectedChekbox)
                if(selectedChekbox){
                    selectedChekbox.checked=false;
                } 
                filter.remove()
                 const updatedCheckbox=Array.from(internal_checkbox)
                  .filter(cb=>cb.checked)
                     .map(cb=>cb.value)
                   if(updatedCheckbox.length==0){ 
                      displayProduct(allProducts)
                      clearInternal.style.display="none"
                   }
                   else{
                      const filtered=allProducts.filter(checkbox=>{
                           return updatedCheckbox.some(range=>{
                            const [min,max]=range.split("-").map(Number)
                            return checkbox.internal_storage>=min&&checkbox.internal_storage<=max
                           })
                      })
                      displayProduct(filtered)
                   }
                
           
        })
        })     
          if(selectedInternal.length==0){
            displayProduct(allProducts)
            clearInternal.style.display="none" 
            window.scroll({
                top:0
            })
          }
          else{
            const filtered=allProducts.filter(checkbox=>{
                 return selectedInternal.some(range=>{
                    const[min,max]=range.split( "-").map(Number)
                   return checkbox.internal_storage>=min && checkbox.internal_storage<=max;
                 })
            })
             displayProduct(filtered)  
             internal_sub.style.display = "none"
             svg5.style.transform = "rotate(-90deg)" 
            window.scroll({  
                top:0 
            })  
          }   
           
    })
})
  clearInternal.addEventListener("click",()=>{
    internal_checkbox.forEach(checkbox=>checkbox.checked=false)
    displayProduct(allProducts)
     filterClear.style.display="none"
    internalClear_sub.style.display="none"
    clearInternal.style.display="none"
    window.scroll({      
        top:0,   
        behavior:"smooth"

    })
  })
const battery_checkbox=document.querySelectorAll("#battery input[type='checkbox']")
const battery_clear=document.getElementById("batteryClear")
const batteryClear_sub=document.getElementById("batteryClear-sub")
console.log(batteryClear_sub)
const clearBattery=document.getElementById("clearBattery")
battery_checkbox.forEach(checkbox=>{
    checkbox.addEventListener("change",()=>{
         const selectedBattey=Array.from(battery_checkbox)
         .filter(cb=>cb.checked)
         .map(cb=>cb.value)
         filterClear.style.display=selectedBattey?"block":"none"

         clearBattery.style.display=selectedBattey?"block":"none"
          batteryClear_sub.innerHTML=""
          selectedBattey.forEach(battery=>{
             const filter=document.createElement("div")
             filter.className="filter-style" 
             batteryClear_sub.appendChild(filter)
             filter.innerHTML=""    
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${battery} mAh</span>` 
              filter.addEventListener("click",()=>{
                const selectedCheckbox=Array.from(battery_checkbox).find(cb=>cb.value==battery)
                console.log(selectedCheckbox)
                if(selectedCheckbox){
                    selectedCheckbox.checked=false
                }
                filter.remove()
                 const updatedCheckbox=Array.from(battery_checkbox)
                 .filter(cb=>cb.checked)
                 .map(cb=>cb.value)
                 if(updatedCheckbox.length==0){
                    displayProduct(allProducts)
                    clearBattery.style.display="none"
                 }
                 else{
                    const filtered=allProducts.filter(checkbox=>{
                        return updatedCheckbox.some(range=>{
                            const [min,max]=range.split("-").map(Number)
                            return checkbox.battery_capacity>=min && checkbox.battery_capacity<=max
                        })
                    }) 
                    displayProduct(filtered)
                 }
              }) 

          })
          if(selectedBattey.length==0){
            displayProduct(allProducts) 
            clearBattery.style.display="none"  
            window.scroll({
                top:0
            })

          }
          else{
            const filtered=allProducts.filter(battery=>{
                return selectedBattey.some(checkbox=>{
                    const [min,max]=checkbox.split("-").map(Number)
                    console.log([min,max])
                    return battery.battery_capacity>=min && battery.battery_capacity<=max
                }) 
            })
            displayProduct(filtered)   
            battery_sub.style.display = "none"
           svg6.style.transform = "rotate(-90deg)"
            window.scroll({
                top:0
            })
          }   
           
    })
})
clearBattery.addEventListener("click",()=>{
   battery_checkbox.forEach(checkbox=>checkbox.checked=false)
   displayProduct(allProducts)
   filterClear.style.display="none"     
   batteryClear_sub.style.display="none";
   clearBattery.style.display="none"
   window.scroll({
    top:0,
    behavior:"smooth"
   })    
})  

  const screenClear_sub=document.getElementById("screenClear-sub")
  const screen_checkbox=document.querySelectorAll("#screen input[type='checkbox']")
  const screenClear=document.getElementById("screenClear-icon")
  console.log(screenClear)
   screen_checkbox.forEach(checkbox=>{ 
    checkbox.addEventListener("change",()=>{   
         selectedScreen=Array.from(screen_checkbox) 
        .filter(cb=>cb.checked)    
        .map(cb=>cb.value)
        screenClear_sub.innerHTML=""
        selectedScreen.forEach(screen=>{
            const filter=document.createElement("div")
             filter.className="filter-style"
             screenClear_sub.appendChild(filter)
             filter.innerHTML=""  
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${screen}</span>` 
              filter.addEventListener("click",()=>{
                 const selectedCheckbox=Array.from(screen_checkbox).find(cb=>cb.value==screen)
                 if(selectedCheckbox){
                    selectedCheckbox.checked=false
                 }
                 filter.remove()
                 const updatedCheckbox=Array.from(screen_checkbox)
                 .filter(cb=>cb.checked) 
                 .map(cb=>cb.value)
                 if(updatedCheckbox.length==0){
                    displayProduct(allProducts)
                    screenClear.style.display="none"
                 }
                 else{
                    const filtered=allProducts.filter(checkbox=>updatedCheckbox.includes(checkbox.screen_size))
                     displayProduct(filtered)
                 }
              })    
             
        })   
         
            filterClear.style.display=selectedScreen?"block":"none"
            screenClear.style.display=selectedScreen?"block":"none"
            screenClear_sub.style.display=selectedScreen?"block":"none" 
            if(selectedScreen.length==0){ 
             displayProduct(allProducts)
             screenClear.style.display="none"
             window.scroll({ 
                top:0,
             })
            }
            else{
                const filtered=allProducts.filter(checkbox=>selectedScreen.includes(checkbox.screen_size))
                displayProduct(filtered) 
                screen_sub.style.display = "none"
                svg7.style.transform = "rotate(-90deg)"
                window.scroll({
                    top:0,
                    behavior:"smooth"
                })
            }
        })  
})
screenClear.addEventListener("click",()=>{
   screen_checkbox.forEach(checkbox=>checkbox.checked=false)
   displayProduct(allProducts)
   filterClear.style.display="none"     
   screenClear.style.display="none";
   screenClear_sub.style.display="none"
   window.scroll({
    top:0,
    behavior:"smooth"
   })  
})  
const primaryCheckbox=document.querySelectorAll("#primary input[type=checkbox]")
const clearPrimary=document.getElementById("clearPrimary")
const primaryClear_sub=document.getElementById("primaryClear-sub")

primaryCheckbox.forEach(checkboxes=>{ 
    checkboxes.addEventListener("change",()=>{
         const selectedPrimary=Array.from(primaryCheckbox)
         .filter(cb=>cb.checked) 
         .map(cb=>cb.value)
         clearPrimary.style.display=selectedPrimary?"block":"none"
         filterClear.style.display=selectedPrimary?"block":"none";
         primaryClear_sub.style.display=selectedPrimary?"block":"none";
         primaryClear_sub.innerHTML=""
         selectedPrimary.forEach(primary=>{  
            const filter=document.createElement("div")
             filter.className="filter-style"
             primaryClear_sub.appendChild(filter)
             filter.innerHTML=""  
             filter.innerHTML=`  
              <span>x</span><span class="title-space">${primary}</span>`  
              filter.addEventListener("click",()=>{
                const checkedCheckbox=Array.from(primaryCheckbox).find(cb=>cb.value==primary)
                if(checkedCheckbox){
                    checkedCheckbox.checked=false
                }
                filter.remove()
                const updatedCheckbox=Array.from(primaryCheckbox)
                .filter(cb=>cb.checked)
                .map(cb=>cb.value)
                if(updatedCheckbox.length==0){
                     displayProduct(allProducts)
                     clearPrimary.style.display="none"
                } 
                else{
                    const filtered=allProducts.filter(checkbox=>{
                        return updatedCheckbox.some(range=>{
                            const [min,max]=range.split('-').map(Number)
                            return checkbox.primary>=min && checkbox.primary<=max
                        })
                    })
                    displayProduct(filtered)
                }
              })   
        })    
          if(selectedPrimary.length==0){
            displayProduct(allProducts) 
            clearPrimary.style.display="none"
            window.scroll({
                top:0
            })
          }     
          else{
             const filtered=allProducts.filter(primary=>{
                 return selectedPrimary.some(range=>{
                    const[min,max]=range.split( "-").map(Number)

                   return primary.primary>=min && primary.primary<=max;
                 })     
             })
             displayProduct(filtered) 
              primary_sub.style.display = "none"
              svg8.style.transform = "rotate(-90deg)"
             window.scroll({
                top:0
             })

          }  
    })        
})
clearPrimary.addEventListener("click",()=>{
    primaryCheckbox.forEach(checkbox=>checkbox.checked=false)
    displayProduct(allProducts)
    filterClear.style.display="none";
    clearPrimary.style.display="none";
    primaryClear_sub.style.display="none"
    window.scroll({
        top:0
    })   
     
})



    filterClear.addEventListener("click",()=>{
        window.location.reload()
    clear_all.style.display="none"   
    brandClear.style.display="none" 
    ratingClear_sub.style.display="none"
    assuredClear_sub.style.display="none"
    ramClear_sub.style.display="none"  
    internalClear_sub.style.display="none" 
  })
  
 popularity.addEventListener("click",()=>{
    displayProduct(allProducts)
 })
 
const price_low=document.getElementById("price-low")
console.log(price_low)
price_low.addEventListener("click", () => {
    const sortedPrice = [...allProducts].sort((a, b) => a.d_price - b.d_price);
    displayProduct(sortedPrice)  
});
const price_high=document.getElementById("price-high")
console.log(price_high)
const popularityClick=document.getElementById("popularity")
popularityClick.addEventListener("clcik",()=>{
     window.location.reload()
})
price_high.addEventListener("click",()=>{
    const sortedPrice=[...allProducts].sort((a, b) => b.d_price - a.d_price)
    displayProduct(sortedPrice)
}) 
 const newest=document.getElementById("newest")
 console.log(newest)
 newest.addEventListener("click",()=>{
    const sortedById=[...allProducts].sort((a,b) => a.id - b.id)
    displayProduct(sortedById)
 })
 const min_price=document.getElementById("min-price")
 const max_price=document.getElementById("max-price")
 console.log(max_price)
 function filterPrice(){
    const min=parseInt(min_price.value)
    const max=parseInt(max_price.value)
    console.log(max)
    const filtered=allProducts.filter(p=>p.d_price>=min && p.d_price<=max)
    console.log(filtered)
 } 
max_price.addEventListener("change",filterPrice)
min_price.addEventListener("change",filterPrice)  