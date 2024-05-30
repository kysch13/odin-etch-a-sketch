const container = document.getElementById('sketch-container');
let tileCount = prompt("How big of a grid?");

drawGrid(tileCount);

function createTile(i, j) {
    let tile = document.createElement('div');
    tile.classList.add('sketch-tile');
    tile.setAttribute('data-id', `${i+1}-${j+1}`);
    tile.style.width = `calc(100%/${tileCount})`;
    tile.style.paddingTop = `calc(100%/${tileCount})`;
    return tile;
}

function drawGrid(tiles) {
    if (tiles < 1 || tiles > 100) {
        alert('Error - Please enter a number between 1 and 100.')
        return null;
    }

    for (let i = 0; i < tiles; i++) {
        for (let j = 0; j < tiles; j++) {
            let newTile = createTile(i, j);
            container.appendChild(newTile);
        }
    }

}

function colourTile(tile) {
    tile.style.background = '#8a8b86';
}

container.addEventListener('mouseover', function(e) {
    console.log(e.target);
    colourTile(e.target);
});

