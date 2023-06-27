const image = document.querySelector('#image');

image.addEventListener('click', function(event) {
    event.stopPropagation();
    document.body.classList.toggle('image-open');
});

document.body.addEventListener('click', function(event) {
    document.body.classList.remove('image-open');
});