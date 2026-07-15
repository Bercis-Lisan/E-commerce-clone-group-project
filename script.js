var offerBar = document.querySelector(".offer-bar");
var offerCloseBtn = document.getElementById("offer-close");
if (offerCloseBtn) {
    offerCloseBtn.addEventListener("click", function () {
        offerBar.style.display = "none";
    });
}