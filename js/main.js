// Create and style the button
let topButton = document.createElement('button');
topButton.className = "scroll__button";
topButton.innerText = "↑";

document.body.appendChild(topButton);

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Scroll to top function
topButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
