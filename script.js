

const shareBtn = document.getElementById("share")
const popup = document.getElementById("popup")

shareBtn.addEventListener("click", () => {
    popup.classList.toggle("no-popup")
})