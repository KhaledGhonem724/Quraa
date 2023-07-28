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
let pagesIDs = ["homepage", "contactus", "aboutus"];
function color(id) {
    document.getElementById(id).style.color = 'salmon';
}