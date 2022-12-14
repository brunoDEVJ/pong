const ptsJG = document.querySelector('#jogador')
const ptsCPU = document.querySelector('#cpu')
let pontosCPU = 0
let pontosJG = 0


class Bola {
  constructor(ctx, pad) {
    this.ctx = ctx;
    this.movendo = false;
    this.pad = pad;
    this.vel = 20;
    this.largura = 20;
    this.dirX = 0;
    this.dirY = 0;
    this.altura = 20;
    this.x = this.ctx.canvas.width / 2 - this.largura / 2;
    this.y = this.ctx.canvas.height / 2 - this.altura / 2;
    this.inicioX = this.x;
    this.inicioY = this.y;
  }

  iniciar() {
    this.movendo = true;
    this.dirX = -1;
    this.dirY = Math.random() * 10 > 5 ? -1 : 1;
  }
  parar() {
    this.movendo = false;
    this.x = this.inicioX;
    this.y = this.inicioY;
    this.pad.x = this.pad.inicioX;
    this.pad.y = this.pad.inicioY;
  }

  gerenciar() {
    if (this.movendo) {
        //movimentação da bola
      this.x += this.dirX * this.vel;
      this.y += this.dirY * this.vel;
        //colisaõ com bordas
      if (this.x >= this.ctx.canvas.width - this.largura) {
        this.dirX = -1;
      }
      if (this.x <= 0) {
        this.dirX = 1;
      }
      if (this.y >= this.ctx.canvas.height - this.altura) {
        this.dirY = -1;
      }
      if (this.y <= 0) {
        this.dirY = 1;
      }

      // colisão com jogador
      if (
        this.x <= this.pad.x + this.pad.largura &&
        this.x + this.largura >= this.pad.x &&
        this.y + this.altura >= this.pad.y &&
        this.y <= this.pad.y + this.pad.altura
      ) {
        this.dirX = 1;
      }
    }

    if (this.x <= 0)
    {
      pontosCPU++
      ptsCPU.innerHTML = pontosCPU
      this.parar()
    }
    if (this.x + this.largura >= this.ctx.canvas.width )
    {
      pontosJG++
      ptsJG.innerHTML = pontosJG
      this.parar()
    }
  }

  desenhar() {
    this.gerenciar();
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
