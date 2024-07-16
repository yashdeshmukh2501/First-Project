document.addEventListener("DOMContentLoaded", function() {
    const initialGif = document.getElementById("initial-gif");
    const secondGif = document.getElementById("second-gif");
    const mainContent = document.getElementById("main-content");

    initialGif.addEventListener("click", function() {
        initialGif.style.display = "none";
        secondGif.style.display = "block";
        
        setTimeout(function() {
            document.getElementById("gif-container").style.display = "none";
            mainContent.style.display = "block";
        }, 3000); // Adjust the delay to match the duration of your second GIF
    });
});
