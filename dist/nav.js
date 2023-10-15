//const { document } = require("postcss");
let optionsHidden = false;
function showOptions() {
    if (optionsHidden) {
        document.getElementById("optionslist").style = "@media (min-width: 640px) { display: none; } ";
    }
    else {
        document.getElementById("optionslist").style.display = "none";
    }
    optionsHidden = !optionsHidden;
}
function showSlideOver() {
    document.getElementById("slide-over-opacity-item background-backdrop").className = "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 opacity-75 ";
    document.getElementById("slide-over-opacity-item close-button").className = "absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ease-in-out duration-500 opacity-75 ";
    document.getElementById("slide-over-translate-item").className = "pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-0";
    document.getElementById("the-slide").className = "relative z-10";
}
function hideSlideOver() {
    document.getElementById("slide-over-opacity-item background-backdrop").className = "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 opacity-0 ";
    document.getElementById("slide-over-opacity-item close-button").className = "absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ease-in-out duration-500 opacity-0 ";
    document.getElementById("slide-over-translate-item").className = "pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 translate-x-full";
    document.getElementById("the-slide").className = "relative -z-10";
}

let pagesIDs = ["homepage", "contactus", "aboutus"];
function color(id) {
    document.getElementById(id).style.color = 'salmon';
}
