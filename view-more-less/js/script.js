function showMore() {
    const dots = document.querySelector("#dots");
    const moreText = document.querySelector("#more");
    const BTNText = document.querySelector("#myBTN");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        BTNText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        BTNText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
