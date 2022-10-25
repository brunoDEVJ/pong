let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width =  1024  //64 * 16;
canvas.height =  512 //64 * 8; 

const teclado = {
    cima:false,
    direita:false,
    baixo:false,
    esquerda:false,
}

const pad = new Pad(ctx, teclado)
const bola = new Bola(ctx, pad)
const cpu = new Cpu(ctx, bola )

const game = () => 
{
    ctx.clearRect(0,0, canvas.width, canvas.height)
    pad.desenhar()
    bola.desenhar()
    cpu.desenhar()
    requestAnimationFrame(game)
}

game()