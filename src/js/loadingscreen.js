
const loader = document.getElementById('loading-screen')

// Once page is finished loading start the transition to page content. Set timeout is only used here to simulate a page load time of 100ms.
window.addEventListener('load', function(e) {
    setTimeout(() => { loader.classList.replace('opacity-100', 'opacity-0'); }, 100);
})