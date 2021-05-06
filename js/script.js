// When the user scrolls down 800px from the top of the document,we will show the button
let buttonTop = document.getElementById('buttonTop');

window.onscroll = function() {
    if (document.documentElement.scrollTop > 800) {
        buttonTop.classList.add('show');
    }
    else {
        buttonTop.classList.remove('show');
    }
};

buttonTop.addEventListener("click", scrollToTop);

function scrollToTop(event) {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
} 

// 