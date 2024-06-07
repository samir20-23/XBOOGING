let inputSearch = document.getElementById("inputsearch");
let search = document.getElementById("submitsearch");
let locations = document.getElementsByClassName("location");

search.addEventListener("click", function () {
  let query = inputSearch.value.trim().toLowerCase();
  let words = query.split(" ");

  for (let i = 0; i < locations.length; i++) {
    let title = locations[i]
      .getElementsByClassName("location_title")[0]
      .textContent.toLowerCase();
    let dex = locations[i]
      .getElementsByClassName("location_dex")[0]
      .textContent.toLowerCase();
    let showLocation = false;

    for (let j = 0; j < words.length; j++) {
      if (title.includes(words[j]) || dex.includes(words[j])) {
        showLocation = true;
        break;
      }
    }

    if (showLocation) {
      locations[i].style.display = "block";
    } else {
      locations[i].style.display = "none";
    }
  }

  if (query === "") {
    for (let i = 0; i < locations.length; i++) {
      locations[i].style.display = "block";
    }
  }
});