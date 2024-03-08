var a = document.querySelector(".portfolio-img img")


a.addEventListener("mousedown",function(){
    a.style.transform = "scale(0.997)"
    a.style.border = "2px solid white"
})
a.addEventListener("mouseup",function(){
    a.style.transform = "scale(1)"
    a.style.border = "none"
})

 

    
   