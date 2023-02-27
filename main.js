let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.nav_list');
let links = document.querySelectorAll('.nav_list li');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

for (let link of links) {
    link.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuBtn.classList.remove('active');
    })
}