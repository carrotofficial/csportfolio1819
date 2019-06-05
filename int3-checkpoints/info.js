// save the images as variables so we can create an event listener
var uk = document.getElementById("uk");
var france = document.getElementById("france");
var belgium = document.getElementById("belgium");
var description = document.getElementById("description");

// event listeners to be triggered when the images are clicked
uk.addEventListener("click", function(){
    description.innerHTML = "<b>Capital:</b> London<br><b>Population</b>: 65,000,000<br><b>Official Language(s)</b>: English";
});
france.addEventListener("click", function(){
    description.innerHTML = "<b>Capital:</b> Paris<br><b>Population</b>: 65,000,000<br><b>Official Language(s)</b>: French";
});
belgium.addEventListener("click", function(){
    description.innerHTML = "<b>Capital:</b> Brussels<br><b>Population</b>: 12,000,000<br><b>Official Language(s)</b>: French and Dutch";
});