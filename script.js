const textarea = document.getElementById('text-field2');
const btnname = document.getElementById('name');
const btnarticle = document.getElementById('article');


btnname.addEventListener('click', function handleClick() {
    textarea.value += '<NAME/>';
});
btnarticle.addEventListener('click', function handleClick() {
    textarea.value += '<No.of Article/>';
});

// var textarea = $('#text-field2');
// var btnname = $('#name');
// var btnarticle = $('#article');


// btnname.on('click', function handleClick() {
//     textarea.value += '<NAME/>';
// });
// btnarticle.on('click', function handleClick() {
//     textarea.value += '<No.of Article/>';
// });