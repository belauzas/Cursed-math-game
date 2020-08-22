class Engine {
    constructor(params) {
        this.currentLayer = 'intro';
        this.DOM = document.querySelector('#app');
        this.layersDOM = {
            intro: this.DOM.querySelector('#main_screen'),
            game: this.DOM.querySelector('#game')
        };

        this.init();
    }

    init() {
        setTimeout(() => {
            this.changeLayer('game');
        }, 3000);
    }

    changeLayer(layer) {
        this.layersDOM[this.currentLayer].classList.remove('visible');
        this.currentLayer = layer;
        this.layersDOM[this.currentLayer].classList.add('visible');
    }
}

export { Engine };