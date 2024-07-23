let Sections=document.querySelectorAll("section");
let NavLinks=document.querySelectorAll("#Header nav li a");

window.onscroll=()=>{
    Sections.forEach(sec =>{
        let Top=window.pageYOffset;
        let OffSet=sec.offsetTop-150;
        let Height=sec.offsetHeight;
        let Id=sec.getAttribute("id");


        if(Top>OffSet && Top< OffSet + Height)
        {
            NavLinks.forEach(Links=>{
                Links.classList.remove("active");
                document.querySelector("#Header nav li a[href*=" + Id + "]").classList.add("active");
            })
        }
    })
}


window.addEventListener("scroll", ()=>{
    let Header=document.querySelector(".navbar");
    Header.classList.add("Sticky", window.pageYOffset > 100);
})

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


//Top Animation
ScrollReveal().reveal(".Title, .Section-Heading", { origin:"top"});
//Left Animation
ScrollReveal().reveal(".Image-2, .Title-img, .Section-C1, .Section-B1", { origin:"left"});
//Right Animation
ScrollReveal().reveal(".Section-Para, .Section-C3, .Section-B2", { origin:"Right"});
//Bottm Animation
ScrollReveal().reveal(".Section-Btn, .Section-C2, .Section-Form", { origin:"bottom"});


