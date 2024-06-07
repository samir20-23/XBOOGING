let addmore = document.getElementById("addmore");
let numberaddmore = 0;
addmore.addEventListener("click", function() {
    let testimonialsAdd = document.getElementById("testimonialsAdd");
    numberaddmore++;
    if (numberaddmore >= 2) {
        numberaddmore = 0;
        testimonialsAdd.style.height = "400px";
        addmore.textContent = "add more...";
    }else{
        testimonialsAdd.style.height = "auto";
    addmore.textContent = "add little...";
    }
});
