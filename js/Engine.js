class Engine {
    constructor(params) {
        this.introLayerLoadingTime = 1000;
        this.mapSize = params.map.size;
        this.mapTiles = params.map.tiles;

        this.DOM = document.querySelector('#app');

        this.currentLayer = 'intro';
        this.layersDOM = {
            intro: this.DOM.querySelector('#main_screen'),
            game: this.DOM.querySelector('#game'),
            tiles: this.DOM.querySelector('#game > .tiles')
        };

        this.init();
    }

    init() {
        setTimeout(() => {
            this.changeLayer('game');
        }, this.introLayerLoadingTime);
        this.renderMapTiles();
    }

    changeLayer(layer) {
        this.layersDOM[this.currentLayer].classList.remove('visible');
        this.currentLayer = layer;
        this.layersDOM[this.currentLayer].classList.add('visible');
    }

    renderMapTiles() {
        let HTML = '';
        const tileTypes = {
            g: 'platformPack_tile019',
            y: 'platformPack_tile008',
            r: 'platformPack_tile020',
            e: 'platformPack_tile021',
        }
        let tileType = '';
        for (let y = 0; y < this.mapSize.height; y++) {
            for (let x = 0; x < this.mapSize.width; x++) {
                tileType = this.mapTiles[y][x];
                HTML += `<div class="tile" ${tileType !== 'e' ? 'data-exercise= "?"' : ''}><img src="./img/tiles/${tileTypes[tileType]}.png"></div>`;
            }
        }
        this.layersDOM.tiles.innerHTML = HTML;
    }
}

export { Engine };