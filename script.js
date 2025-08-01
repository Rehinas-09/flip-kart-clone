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
const rating = document.getElementById("rating")
const rating_chart = document.getElementById("rating-chart")
rating.addEventListener("click", () => {
    if (rating_chart.style.display === "none") {
        rating.style.display = "block"
    }
    else {
        rating_chart.style.display = "none"
    }
})
const gst = document.getElementById("gst")
const gst_check = document.getElementById("gst-check")
gst.addEventListener("click", () => {
    if (gst_check.style.dispaly == "none") {
        gst_check.style.display == "block"
    }
    else {
        gst_check.style.display == "none"
    }
})

const ram = document.getElementById("ram")
const ram_child = document.getElementById("ram-child")
ram.addEventListener("click", () => {
    if (ram_child.style.display == "none") {
        ram_child.style.display = "block"
    }
    else {
        ram_child.style.display = "none"
    }
})
const electronics = document.getElementById("electronics")
console.log(electronics)
const electronic_slide = document.getElementById("electronic-slide")
console.log(electronic_slide)
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