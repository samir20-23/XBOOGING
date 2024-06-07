function initializeCarousel(wrapper) {
    let carousel = wrapper.querySelector(".carousel");
    let firstCardWidth = carousel.querySelector(".card").offsetWidth;
    let arrowBtns = wrapper.querySelectorAll("i");
    let carouselChildrens = [...carousel.children];

    let isDragging = false;
    let isAutoPlay = true;
    let startX, startScrollLeft;
    let timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -300 : 300 ;console.log(carousel.offsetWidth)
        });
    });

    let dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    let dragging = (e) => {
        if(!isDragging) return; 
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    let dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };
    

    let infiniteScroll = () => {
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    };

    let autoPlay = () => {
        if(window.innerWidth >= 800 ){
            timeoutId = setTimeout(() => carousel.scrollLeft += 300, 1000);
        }else{
            timeoutId = setTimeout(() => carousel.scrollLeft += 300, 2000);
        }
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}

document.querySelectorAll(".wrapper").forEach(initializeCarousel);
