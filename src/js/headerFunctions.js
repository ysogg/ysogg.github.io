var toggleDate = false;
var toggleFinderBtn = false;
var toggleFinderDrop = false;

const date = new Date();
var year = String(date.getFullYear());

var trimmedDate = String(date.getMonth() + 1 + "/" + date.getDate() + "/" + year.substring(2));
var formattedTime = String(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));


document.body.querySelector('header')?.addEventListener("mouseenter", (e) => {
    toggleWindowSelection();
});

document.body.querySelector('header')?.addEventListener("mouseleave", (e) => {
    toggleWindowSelection();
});


// -- Date Toggle -- //
var dateField = document.getElementById("date");
dateField.innerHTML = formattedTime;

dateField.addEventListener('click', e => {
    if (toggleDate == false) {
        dateField.innerHTML = trimmedDate;
    } else {
        dateField.innerHTML = formattedTime;
    }
    toggleDate = !toggleDate;
})  


// -- Finder Toggle -- //
var finderBtn = document.getElementById("finderBtn");
var finderField = document.getElementById("finder");
finderField.innerHTML = "[] Finder";

finderBtn.addEventListener('click', e => {
    if (toggleFinderBtn == false) {
        finderField.innerHTML = "Finder";
    } else {
        finderField.innerHTML = "[] Finder";
    }
    toggleFinderBtn = !toggleFinderBtn;
}) 

/*
    Clicking finder should open dropdown
    If mouse enters header then close drop down; however next time finder is hovered then reopen without click
*/
finderField.addEventListener('click', e => {
    if (toggleFinderDrop == false) {
        //open dropdown
    } else {
        //close
    }
    toggleFinderDrop = !toggleFinderDrop;
})