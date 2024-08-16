var toggleDate = false;
var toggleFinder = false;
const date = new Date();
var year = String(date.getFullYear());

var trimmedDate = String(date.getMonth() + 1 + "/" + date.getDate() + "/" + year.substring(2));
var formattedTime = String(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));



// -- Date Toggle -- //
var dateField = document.getElementById("date");
dateField.innerHTML = formattedTime;

dateField.addEventListener("mouseenter", (e) => {
    toggleWindowSelection();
});

dateField.addEventListener("mouseleave", (e) => {
    toggleWindowSelection();
});

dateField.addEventListener('click', e => {
    if (toggleDate == false) {
        toggleDate = !toggleDate;
        dateField.innerHTML = trimmedDate;
    } else {
        toggleDate = !toggleDate;
        dateField.innerHTML = formattedTime;
    }
})  


// -- Finder Toggle -- //
var finderBtn = document.getElementById("finderBtn");
var finderField = document.getElementById("finder");
finderField.innerHTML = "[] Finder";

finderBtn.addEventListener("mouseenter", (e) => {
    toggleWindowSelection();
});

finderBtn.addEventListener("mouseleave", (e) => {
    toggleWindowSelection();
});

finderBtn.addEventListener('click', e => {
    if (toggleFinder == false) {
        toggleFinder = !toggleFinder;
        finderField.innerHTML = "Finder";
    } else {
        toggleFinder = !toggleFinder;
        finderField.innerHTML = "[] Finder";
    }
})  