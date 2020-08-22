import { Engine } from './Engine.js';

(function () {
    new Engine({
        map: {
            size: {
                width: 9,
                height: 9
            },
            tiles: [
                ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
                ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
                ['r', 'r', 'y', 'y', 'y', 'y', 'y', 'r', 'r'],
                ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
                ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
                ['y', 'y', 'g', 'g', 'g', 'g', 'g', 'y', 'y'],
                ['y', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'y'],
                ['g', 'g', 'g', 'e', 'e', 'e', 'g', 'g', 'g'],
                ['g', 'g', 'g', 'e', 'e', 'e', 'g', 'g', 'g']
            ],
            playerPosition: { x: 4, y: 8 },
            trophyPositions: [
                { x: 2, y: 0 },
                { x: 6, y: 0 },
            ]
        }
    });
})();