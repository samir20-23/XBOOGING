
// select text search



// div select 
let numberselesearch = 0 ;
if(numberselesearch == 0){
    let textsearch = document.getElementById("textContentSearch");
    textsearch.style.display="none";
}else{
    let textsearch = document.getElementById("textContentSearch");
    textsearch.style.display="none";
}
inputSearch.addEventListener("input",function(){
    numberselesearch++;
    let textsearch = document.getElementById("textContentSearch");
    textsearch.style.display="block";
});

document.addEventListener("mousemove",function(){
    numberselesearch--;
    let textsearch = document.getElementById("textContentSearch");
    textsearch.style.display="none";
})
// empty

  
  const countries  = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of The", "Cook Islands", "Costa Rica", "Cote D'ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and The Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and The South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

  // Autocomplete function
  function autocomplete(inp, arr) {
    let currentFocus;

    inp.addEventListener("input", function() {
      
      let val = this.value;
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      let autocompleteList = document.createElement("DIV");
      autocompleteList.id="textsearchselect";
      autocompleteList.setAttribute("id", this.id + "autocomplete-list");
      autocompleteList.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(autocompleteList);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          let autocompleteItem = document.createElement("DIV");
          autocompleteItem.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          autocompleteItem.innerHTML += arr[i].substr(val.length);
          autocompleteItem.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          autocompleteItem.addEventListener("click", function() {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          autocompleteList.appendChild(autocompleteItem);
        }
      }
    });

    inp.addEventListener("keydown", function(e) {
      let autocompleteList = document.getElementById(this.id + "autocomplete-list");
      if (autocompleteList) { autocompleteList = autocompleteList.getElementsByClassName("autocomplete-item"); }
      if (e.keyCode === 40) {
        currentFocus++;
        addActive(autocompleteList);
      } else if (e.keyCode === 38) {
        currentFocus--;
        addActive(autocompleteList);
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (autocompleteList) { autocompleteList[currentFocus].click(); }
        }
      }
    });

    function addActive(autocompleteList) {
      if (!autocompleteList) { return false; }
      removeActive(autocompleteList);
      if (currentFocus >= autocompleteList.length) { currentFocus = 0; }
      if (currentFocus < 0) { currentFocus = (autocompleteList.length - 1); }
      autocompleteList[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(autocompleteList) {
      for (let i = 0; i < autocompleteList.length; i++) {
        autocompleteList[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(element) {
      let autocompleteItems = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < autocompleteItems.length; i++) {
        if (element !== autocompleteItems[i] && element !== inp) {
          autocompleteItems[i].parentNode.removeChild(autocompleteItems[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  // Call the autocomplete function for the search box
  autocomplete(document.getElementById("inputsearch"), countries);

// select text search