console.log("CatWebs Loaded");

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mouseenter', () => {
card.style.boxShadow =
'0 10px 25px rgba(255,176,0,0.3)';
});

card.addEventListener('mouseleave', () => {
card.style.boxShadow = 'none';
});

});
