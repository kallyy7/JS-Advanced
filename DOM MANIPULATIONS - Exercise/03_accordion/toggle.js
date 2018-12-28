function toggle() {
    let button = $('.button')[0];

    if (button.textContent === "More") {
        button.textContent = "Less";
        $('#extra').css("display", "block");
    } else {
        button.textContent = "More";
        $('#extra').css("display", "none");
    }
}