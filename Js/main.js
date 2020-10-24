//Preloader
let preloader = document.querySelector(".preloader-wrapper");

window.addEventListener("load",()=>{
    setTimeout(()=>{
        preloader.style.WebkitTransition = "opacity .8s";
        preloader.style.opacity = "0";
        
    },1250);

});
//drop down effect
let dropdown = document.querySelector(".drop-down");
let aboutLink = document.querySelector(".about");

aboutLink.addEventListener("mouseover",()=>{
    dropdown.style.display = "block";

});
aboutLink.addEventListener("mouseout",()=>{
    dropdown.style.display = "none";
})

//toggle effect
let toggleBtn = document.querySelector(".toggle-btn");
let nav = document.querySelector("nav");

toggleBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    nav.classList.toggle('hide');
    toggleBtn.classList.toggle("on");
});

//onscroll header implementation
let header = document.querySelector("header");


function stickyNavigation(){
    if(window.scrollY > 20){
        header.classList.add("onScroll");
    }else{
        header.classList.remove("onScroll");
    }
}
function stickyNavigation2(){
    if(window.innerWidth <= 1020){
        header.classList.add("onScroll");
    }else{
        header.classList.remove("onScroll");
    }
}
window.addEventListener("scroll",stickyNavigation);
window.addEventListener("resize",stickyNavigation2);

$(document).ready(function(){
    window.onload = function(){
        $(".autoplay").slick({
            autoplay:true,
            autoplaySpeed:2000,
            centerMode:true,
            slidesToShow:5,
            slidesToScroll:1,
            arrows:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings:{slidesToShow: 4}
                },
                {
                    breakpoint:992,
                    settings:{slidesToShow: 3}
                },
                {
                    breakpoint:768,
                    settings:{slidesToShow: 2}
                },
                {
                    breakpoint:580,
                    settings:{slidesToShow: 1}
                }
            ]
        });
    }

})
//testimonial implementation
let carousel_list = document.querySelector(".carousel-list");
let carousel_content = document.querySelectorAll(".carousel-content");
let position = 0;
count = 0;

window.addEventListener("load",()=>{
    let interval = setInterval(move,4000);
    let carousel_list = document.querySelector(".carousel-list");
    let clone_carousel_list0 = carousel_list.cloneNode(true);
    let clone_carousel_list1 = carousel_list.cloneNode(true);
    let clone_carousel_list2 = carousel_list.cloneNode(true);
    position = 0;
    function move(){
        if(position == -800){
            carousel_list.appendChild(clone_carousel_list0);
            position -= 400;
            carousel_list.style.transform = "translateX("+position+"px)";
        }else{
            position -= 400;
            carousel_list.style.transform = "translateX("+position+"px)";
        }
        if(position == -1600){
            carousel_list.appendChild(clone_carousel_list1);
        }
        if(position == -2800){
            carousel_list.appendChild(clone_carousel_list2);
        }
       if(position == -4400){
           clearInterval(interval);  
       }
    }
});