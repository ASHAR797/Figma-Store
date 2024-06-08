const cadmg = document.querySelector(".cad-img");
fastamg = cadmg.querySelectorAll("img")[0];
cadmgicon = document.querySelectorAll(".slder-cad i");

let sdagstat = false, isDragging = false, prevpageX, prevScrollLeft, hhhggg ;

const showHidicon = () => {
    let screllWidth = cadmg.scrollWidth - cadmg.clientWidth;
    cadmgicon[0].style.display = cadmg.scrollLeft == 0 ? "none" : "block";
    cadmgicon[1].style.display = cadmg.scrollLeft == screllWidth ? "none" : "block";
}

cadmgicon.forEach(icon => {
    icon.addEventListener("click", () => {
        let fastamGwidth = fastamg.clientWidth + 10;
        cadmg.scrollLeft += icon.id == "left" ? -fastamGwidth : fastamGwidth;
        setTimeout(() => showHidicon(), 60);
    })
});

const autoSlide = () => {
    if(cadmg.scrollLeft == (cadmg.scrollWidth - cadmg.clientWidth)) return;

    hhhggg = Math.abs(hhhggg);
    let firstImgWidth = fastamg.clientWidth + 14;
    let vaIdiffernce = firstImgWidth - hhhggg;

    if(cadmg.scrollLeft > prevScrollLeft){
       return cadmg.scrollLeft += hhhggg > firstImgWidth / 3 ? vaIdiffernce : -hhhggg;
    }
    cadmg.scrollLeft -= hhhggg > firstImgWidth / 3 ? vaIdiffernce : -hhhggg;
}

const dragstat = (e) => {
    sdagstat = true;
    prevpageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = cadmg.scrollLeft

}
const dragging =(e) => {
    if(!sdagstat) return;
    e.preventDefault()
    isDragging = true;
    cadmg.classList.add("dragging");
    hhhggg =  (e.pageX || e.touches[0].pageX) -  prevpageX ;
    cadmg.scrollLeft = prevScrollLeft - hhhggg;
    showHidicon();
}

const dragstp = () => {
    sdagstat = false;
    cadmg.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

cadmg.addEventListener("mousedown", dragstat);
cadmg.addEventListener("touchstart", dragstat);

cadmg.addEventListener("mousemove",dragging );
cadmg.addEventListener("touchmove",dragging );

cadmg.addEventListener("mouseup",dragstp);
cadmg.addEventListener("mouseleave",dragstp);
cadmg.addEventListener("touchend",dragstp);
