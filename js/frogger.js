//La variable game sirve para una instancia del juego

var game = new Phaser.Game(923, 628, Phaser.AUTO, ' ', {preload: preload, create: create, update: update});

var player;

//El juego se divide en 3 fases: precarga, crear y cargar.
//Con preload cargamos la memoria de los elementos que se van a utilizar
function preload(){
    game.load.spritesheet('heroe', 'sprites/frogger.png', 30, 30);
    game.load.image('bosque', 'imagen/fondofrogger.jpg');

       //Precargar sonidos
       game.load.audio('salto', ['audiofx/frogger.wav'])
};

//La funcion create nos permite colocar los objetos en el escenario
function create(){
    //Agregar imagen de fondo que se desplaza
    fondo = game.add.tileSprite(0, 0, 923, 628, 'bosque');

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, 601, 'heroe');

    //Las animacion
    player.animations.add('der', [12, 13, 14, 15], 10, true);
    player.animations.add('izq', [4, 5, 5, 6 ], 10, true);
    player.animations.add('arr', [0, 1, 2, 3], 10, true);
    player.animations.add('aba', [8, 9 ,10, 11], 10, true);


    //Asignar las teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);

    //Agregar los sonidos 
    salto = game.add.audio('salto');
    salto.volume = 0.03;
};


//la funcion update permite actualizar las animaciones con velocidad que elegimos
function update (){
    if (derecha.isDown){
        fondo.tilePosition.x -= 1;
        player.animations.play('der');
        salto.play();
    }
    else if (izquierda.isDown){
        fondo.tilePosition.x += 1;
        player.animations.play('izq');
        salto.play();
    }
    else if (arriba.isDown){
        player.y -=1;
        player.animations.play('arr');
        salto.play();
    }
    else if (abajo.isDown){
        player.y +=1;
        player.animations.play('aba');
        salto.play();
    }
    else {
        player.animations.stop();
        player.frame = 128;
    }
};