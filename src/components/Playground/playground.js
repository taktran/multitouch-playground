const { forEachObjIndexed, reduce } = require('ramda');

const Game = ({
  Phaser,
  width = 800,
  height = 600,
  backgroundColor
}) => {
  if (!Phaser) { throw new Error('Phaser is required'); }

  const NUM_POINTERS = 10;
  const state = {
    debug: true,
    distances: []
  };
  const game = new Phaser.Game(width, height, Phaser.AUTO, '', {
    create: create,
    update: update,
    render: render
  });

  const toggleDebug = () => {
    state.debug = !state.debug;
  };

  const showPointers = () => {
    game.debug.pointer(game.input.mousePointer);

    const {
      pointer1,
      pointer2,
      pointer3,
      pointer4,
      pointer5,
      pointer6,
      pointer7,
      pointer8,
      pointer9,
      pointer10
    } = game.input;

    game.debug.pointer(pointer1);
    game.debug.pointer(pointer2);
    game.debug.pointer(pointer3);
    game.debug.pointer(pointer4);
    game.debug.pointer(pointer5);
    game.debug.pointer(pointer6);
    game.debug.pointer(pointer7);
    game.debug.pointer(pointer8);
    game.debug.pointer(pointer9);
    game.debug.pointer(pointer10);
  }

  const getDistances = () => {
    for (let pointerIndex = 0; pointerIndex < NUM_POINTERS; pointerIndex++) {
      for (let comparisonPointerIndex = 0; comparisonPointerIndex < NUM_POINTERS; comparisonPointerIndex++) {
        if (!state.distances[pointerIndex]) { state.distances[pointerIndex] = []; }

        const pointer = state.pointers[pointerIndex];
        const pointerToCompare = state.pointers[comparisonPointerIndex];
        state.distances[pointerIndex][comparisonPointerIndex] = pointer.position.distance(pointerToCompare.position);
      }
    }
  };

  const showDistances = () => {
    const padding = 32;
    const initX = 32;
    const initY = 32;
    forEachObjIndexed((pDist, index) => {
      const pNum = parseInt(index, 10) + 1;
      const getPointerDistanceText = (acc, dist) => `${acc}\t${Math.round(dist)}`;
      const pDistText = reduce(getPointerDistanceText, '', pDist);
      const y = initY + (index * padding);
      game.debug.text(`p${ pNum }: ${pDistText}`, initX, y);
    }, state.distances);
  };

  // let emitter;

  function create() {
    game.stage.backgroundColor = backgroundColor;

    // Starts with 2 pointers
    //
    // Add another 8 pointers
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();

    const {
      pointer1,
      pointer2,
      pointer3,
      pointer4,
      pointer5,
      pointer6,
      pointer7,
      pointer8,
      pointer9,
      pointer10
    } = game.input;
    state.pointers = [
      pointer1,
      pointer2,
      pointer3,
      pointer4,
      pointer5,
      pointer6,
      pointer7,
      pointer8,
      pointer9,
      pointer10
    ];
  }

  // function createParticleEmitter({
  //   x,
  //   y,
  //   maxParticles,
  //   particleLifespan,
  //   particleFrequency,
  //   particleQuantity,
  //   totalParticles
  // }) {
  //   if (emitter) { emitter.destroy(); }
  //
  //   emitter = game.add.emitter(x, y, maxParticles);
  //
  //   emitter.makeParticles('particle', 0, maxParticles, true, true);
  //   emitter.setRotation(0, 0);
  //   emitter.setScale(0.3, 0.5, 0.3, 0.5);
  //
  //   const startImmediately = true;
  //   emitter.flow(particleLifespan, particleFrequency, particleQuantity, totalParticles, startImmediately);
  // }
  //
  // function onCollision(p1, p2) {
  //   const x = p1.x + (p1.width / 2);
  //   const y = p1.y;
  //   createParticleEmitter({
  //     x,
  //     y,
  //     maxParticles: 14,
  //     particleLifespan: 5000,
  //     particleFrequency: 200,
  //     particleQuantity: 1,
  //     totalParticles: 14
  //   });
  // }

  function update() {
    getDistances();
  }

  function render() {
    const { debug } = state;

    if (debug) {
      showPointers();
      showDistances();
    }
  }

  return {
    game,
    toggleDebug
  };
};

module.exports = Game;
