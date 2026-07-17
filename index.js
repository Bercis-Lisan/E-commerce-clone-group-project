let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let navclose = document.getElementById("navclose")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

navclose.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
