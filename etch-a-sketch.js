const container = document.getElementById('sketch-container');
const controls = document.querySelector('.controls');
let tileCount = 16;
let rainbowMode = false;
let darkenMode = false;

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
    if (rainbowMode) {
        tile.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

        if (darkenMode) {
            // Make tile progressivly darken with each pass
            let tileOpacity = tile.style.opacity;
            console.log(tileOpacity);
            if (tileOpacity < 1) {
                tileOpacity = (((tileOpacity * 10) + 1) / 10);
                tile.style.opacity = `${tileOpacity}`;
            }
        } else {
            tile.style.opacity = 1;
        }
        
    } else {
        tile.style.background = '#8a8b86';

        if (darkenMode) {
            tile.style.background = '#000';
            // Make tile progressivly darken with each pass
            let tileOpacity = tile.style.opacity;
            console.log(tileOpacity);
            if (tileOpacity < 1) {
                tileOpacity = (((tileOpacity * 10) + 1) / 10);
                tile.style.opacity = `${tileOpacity}`;
            }
        } else {
            tile.style.opacity = 1;
        }
        

    }
}

function rainbowToggle(rainbowSwitch) {
    if (rainbowSwitch.checked) {
        rainbowMode = true;
    } else {
        rainbowMode = false;
    }
}

function darkenToggle(darkenSwitch) {
    if (darkenSwitch.checked) {
        darkenMode = true;
    } else {
        darkenMode = false;
    }
}

function newGrid() {
    container.innerHTML = '';
    tileCount = prompt('How many rows and columns would you like in your grid? Please enter a number between 1 and 100.')
    tileCount = Number(tileCount);
    console.log(tileCount);
    if (tileCount < 1 || tileCount > 100 || typeof tileCount != 'number' || isNaN(tileCount)) {
        tileCount = 16
        drawGrid(tileCount);
        alert('Please enter a valid number bewtween 1 and 100.');
    } else {
        drawGrid(tileCount);
    }
}

container.addEventListener('mouseover', function(e) {
    if (e.target.id != 'sketch-container') {
        colourTile(e.target);
    }
});


controls.addEventListener('click', function(e) {
    let clickEvent = e.target;
    if (clickEvent.id === 'rainbow-switch') {
        rainbowToggle(clickEvent);
    } else if (clickEvent.id === 'darken-switch') {
        darkenToggle(clickEvent);
    } else if (clickEvent.id === 'new-grid') {
        newGrid();
    }
});



