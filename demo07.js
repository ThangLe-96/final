function toggleMobileMenu() {
    document.getElementById("MobileMenu").classList.toggle("hidden");
    document.getElementById("MobileMenu").classList.toggle("flex");
}

function moveCursor(event) {
    document.getElementById("cursor").style.left = event.clientX;
    document.getElementById("cursor").style.top = event.clientY;
}