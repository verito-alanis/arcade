//La variable game sirve para una instancia del juego

var game = new Phaser.Game(500, 645, Phaser.AUTO, ' ', {preload: preload, create: create, update: update});

var player;

//El juego se divide en 3 fases: precarga, crear y cargar.
//Con preload cargamos la memoria de los elementos que se van a utilizar
function preload(){
    game.load.spritesheet('heroe', 'sprites/pacman.png', 25, 25);
    game.load.image('bosque', 'imagen/fondopacman.jpg');

    //Precargar sonidos
    game.load.audio('comer', ['audiofx/pacman.mp3']);
};

//La funcion create nos permite colocar los objetos en el escenario
function create(){
    //Agregar imagen de fondo
    game.add.sprite(0, 0, 'bosque');

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 23, 289, 'heroe');

    //Las animacion
    player.animations.add('der', [6, 7,8], 10, true);
    player.animations.add('izq', [3, 4, 5 ], 10, true);
    player.animations.add('arr', [9, 10, 11], 10, true);
    player.animations.add('aba', [0, 1, 2], 10, true);

    //Asignar las teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);

    //Agregar los sonidos 
    comer = game.add.audio('comer');
    comer.volume = 0.02;

};


//la funcion update permite actualizar las animaciones con velocidad que elegimos
function update (){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der');
        comer.play();
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq');
        comer.play();
    }
    else if (arriba.isDown){
        player.y -=1;
        player.animations.play('arr');
        comer.play();
    }
    else if (abajo.isDown){
        player.y +=1;
        player.animations.play('aba');
        comer.play();
    }
    else {
        player.animations.stop();
        player.frame = 128;
    }
};