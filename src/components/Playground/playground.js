const Game = ({
  Phaser,
  width = 800,
  height = 600,
  backgroundColor
}) => {
  if (!Phaser) { throw new Error('Phaser is required'); }

  const state = {
    debug: true
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


  let dist1to2 = 0;
  let dist1to3 = 0;
  let dist1to4 = 0;

  function update() {
    const {
      pointer1,
      pointer2,
      pointer3,
      pointer4
    } = game.input;

    if (pointer1.active) {
      dist1to2 = pointer2.active ? pointer1.position.distance(pointer2.position) : 0;
      dist1to3 = pointer3.active ? pointer1.position.distance(pointer3.position) : 0;
      dist1to4 = pointer4.active ? pointer1.position.distance(pointer4.position) : 0;
    }
  }

  function render() {
    const { debug } = state;

    if (debug) {
      showPointers();

      game.debug.text(`p1 -> p2: ${dist1to2}`, 32, 32);
      game.debug.text(`p1 -> p3: ${dist1to3}`, 32, 64);
      game.debug.text(`p1 -> p4: ${dist1to4}`, 32, 96);
    }
  }

  return {
    game,
    toggleDebug
  };
};

module.exports = Game;
