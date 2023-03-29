let nav = document.querySelector(".navigation-wrap")
window.onscroll = ()=>{
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on")
    }else {
        nav.classList.remove("scroll-on")
    }
}

let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse')
navbar.forEach((a)=>{
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show");
    })
})

// ======================================

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1
        steps = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },steps);
        
    }
    counter("count1",0,1287,3000)
    counter("count2",1000,5647,2500)
    counter("count3",0,1440,3000)
    counter("count4",0,2387,3000)
});

