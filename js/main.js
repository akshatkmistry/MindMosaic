
let topButton = document.createElement('button');
topButton.className = "scroll__button";
topButton.innerText = "↑";

document.body.appendChild(topButton);

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

topButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
