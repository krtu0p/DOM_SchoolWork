let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.top = value * 0.5 + 'px';
    moon.style.top = value * 0.8 + 'px';
    mountains_behind.style.top = value * 0.3 + 'px';
    mountains_front.style.top = value * 0.1 + 'px';
});
