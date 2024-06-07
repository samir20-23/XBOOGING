let reserves = document.querySelectorAll(".reserve");
reserves.forEach((reserve) => {
  reserve.addEventListener("click", function () {
    // Find the parent .location element of the clicked .reserve button
    let location = reserve.closest(".location");
    if (location) {
        location.setAttribute("style","text-align: center;    height: 86%;width: 96%;background:red;");

        console.log("Location text content:", location.textContent);
        console.log("Location inner HTML:", location.innerHTML);
        console.log("Location class name:", location.className);
        console.log("Location ID:", location.id);
        console.log("Location attributes:", location.attributes);
         
              // Create the modal overlay
      let selectreserve = document.getElementById("selectreserve");
      selectreserve.setAttribute(
        "style",
        "width: 100%; height: 100vh; background: rgba(255, 255, 255, 0.562); z-index: 2; position: fixed; top: 0; display: flex; align-item s: center; justify-content: center;"
      );

      // Create the modal content container
      let reserveAdd = document.createElement("div");
      reserveAdd.id = "reserve_Add";
      reserveAdd.setAttribute(
        "style",
        "width: 80%; height: 90vh; background: rgba(0, 0, 0, 0.943);  filter: blur(0.3px);top: 25px;display: flex; align-items: center; justify-content: center;color: wheat;"
      );    
      // Clone the content of the location element and append it to the modal
      let locationClone = location.cloneNode(true);
      reserveAdd.appendChild(locationClone);

      // Append the modal content container to the modal overlay
      selectreserve.appendChild(reserveAdd);

      // Disable scrolling on the body while the modal is open
      document.body.style.overflow = "scroll";
    //   selectreserve.style.display="flex";
    //   document.body.style.overflow = "scroll";
      
    //   location.setAttribute("style","display:none;");
    
    //   style location
    }
  });
});
