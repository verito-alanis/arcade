var cursors, sprite;
var movimiento = 300;
var giro = 200;

var game = new Phaser.Game(1300, 650, Phaser.CANVAS, 'Auto', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('auto', 'sprites/carro.png');
    game.load.image('carrera', 'imagen/fondorallyx.png');

    //Precargar sonidos
    game.load.audio('inicio', ['audiofx/auto_llantas_chirriando.ogg', 'audiofx/auto_llantas_chirriando.mp3'])

    game.load.audio('arranque', ['audiofx/auto_carreras1.ogg', 'audiofx/auto_carreras1.mp3'])
}

var cursores, sprite;

function create() {
    //Agregar las f{isicas del juego
    game.physics.startSystem(Phaser.Physics.ARCADE);

     //Agregar imagen de fondo
     game.add.sprite(0, 0, 'carrera');
     
    //agregar auto
    sprite = game.add.sprite(408, 800, 'auto');
    sprite.anchor.setTo(0.5, 0.5);

    game.physics.enable(sprite);
    sprite.body.collideWorldBounds=true;
    
    //flechas del teclado para mover el auto
    cursors = game.input.keyboard.createCursorKeys();

    //Agregar los sonidos 
    inicio = game.add.audio('inicio');
    inicio.volume = 0.01;

    arranque = game.add.audio('arranque');
    arranque.volume = 0.01;

}

function update() {
    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;
    sprite.body.angularVelocity = 0;

    if (cursors.left.isDown){
        sprite.body.angularVelocity = -giro;
        inicio.play();
    }
    else if (cursors.right.isDown){
        sprite.body.angularVelocity = giro;
        inicio.play();
    }
    if (cursors.up.isDown){
        sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, movimiento));
        arranque.play();
    }
    else{arranque.stop();}

}