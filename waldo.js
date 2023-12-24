const waldo = document.getElementById('waldo');
let waldoPosX = Math.floor(Math.random() * 100);
let waldoPosY = Math.floor(Math.random() * 100);
console.log(`Waldo's X is ${waldoPosX}`);
console.log(`Waldo's Y is ${waldoPosY}`);

waldo.style.left = `${waldoPosX}%`;
waldo.style.top = `${waldoPosY}%`;

const handleFoundWaldo = () => {
    console.log('You found Waldo!');
    waldo.style.display = 'none';
}