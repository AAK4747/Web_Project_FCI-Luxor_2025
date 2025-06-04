function hello() {
    let name = prompt("Enter Your Name");
    const len=name.length;
    const hour = new Date().getHours();
    let state;
    if (hour < 12) state="Good Morning";
    else if (hour < 18) state="Good Afternoon";
    else state = "Good Evening";
    window.alert(`${state} ${name}`);
}
/* about me*/












































/*
function toggleExtraInfo() {
    const section = document.getElementById("extra-info");
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    }
}
    // Hide extra info by default
    const extra = document.getElementById("extra-info");
    if (extra) extra.style.display = "none";

*/