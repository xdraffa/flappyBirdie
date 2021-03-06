const sprites = new Image();
sprites.src = '/sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');



// [Background]
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );
    }
}

// [chao]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura
        );

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura
        );
    }
}

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
    },

    desenha(){
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, //Sprite X, Sprite Y
            flappyBird.largura, flappyBird.altura, // Tamanho do Recorte no Sprite
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura // Tamanho do Render do Sprite
        );
    }
}

const CanoBaixo = {
    spriteX: 0,
    spriteY: 169,
    largura: 52,
    altura: 400,
    x: 125,
    y: 125,
    desenha(){
        contexto.drawImage(
            sprites,
            CanoBaixo.spriteX, CanoBaixo.spriteY,
            CanoBaixo.largura, CanoBaixo.altura,
            CanoBaixo.x, CanoBaixo.y,
            CanoBaixo.largura, CanoBaixo.altura
            
        );
    }
}

const CanoCima = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
}

function loop() {
    planoDeFundo.desenha();
    CanoBaixo.desenha();
    chao.desenha();
    flappyBird.atualiza();
    flappyBird.desenha();

    

    requestAnimationFrame(loop);
}

loop();