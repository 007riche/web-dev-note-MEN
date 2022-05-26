// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png

const container = document.querySelector('#container');
// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// container.appendChild(newImg);
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 899; i++) {
    const pokemon = document.createElement('div');

    const label = document.createElement('span');
    label.innerText = `Pokemon ${i}`;

    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    pokemon.classList.add('pokemon')

    container.appendChild(pokemon);
}