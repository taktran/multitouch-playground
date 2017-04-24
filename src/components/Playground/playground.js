const Game = ({
  Phaser,
  width = 800,
  height = 600,
  backgroundColor
}) => {
  if (!Phaser) { throw new Error('Phaser is required'); }

  const game = new Phaser.Game(width, height, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });

  function preload() {

  }

  // let emitter;

  function reset() {

  }

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

    reset();
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

  }

  function render() {
    game.debug.pointer(game.input.mousePointer);
    game.debug.pointer(game.input.pointer1);
    game.debug.pointer(game.input.pointer2);
    game.debug.pointer(game.input.pointer3);
    game.debug.pointer(game.input.pointer4);
    game.debug.pointer(game.input.pointer5);
    game.debug.pointer(game.input.pointer6);
    game.debug.pointer(game.input.pointer7);
    game.debug.pointer(game.input.pointer8);
    game.debug.pointer(game.input.pointer9);
    game.debug.pointer(game.input.pointer10);
  }

  return {
    game,
    reset
  };
};

module.exports = Game;
