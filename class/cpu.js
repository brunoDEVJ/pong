class Cpu {
  constructor(ctx, bola) {
    this.ctx = ctx;
    this.bola = bola;
    this.vel = 5;
    this.largura = 20;
    this.altura = 100;
    this.x = this.ctx.canvas.width - this.largura;
    this.y = this.ctx.canvas.height / 2 - this.altura / 2;
    this.inicioX = this.x;
    this.inicioY = this.y;
  }

  gerenciar() {
    if (this.bola.dirX > 0 && this.bola.x > this.ctx.canvas.width / 2) {
      if (this.bola.y + this.bola.altura / 2 > this.y + this.altura / 2) {
        this.y += this.vel;
      }
      if (this.bola.y + this.bola.altura / 2 < this.y + this.altura / 2) {
        this.y -= this.vel;
      }
      if (this.bola.x + this.bola.largura < this.x) {
        this.x -= this.vel;
      }
    } else {
      if (this.y > this.inicioY) {
        this.y -= this.vel;
      }
      if (this.y < this.inicioY) {
        this.y += this.vel;
      }
      if (this.x > this.inicioX) {
        this.x -= this.vel;
      }
      if (this.x < this.inicioX) {
        this.x += this.vel;
      }
    }
  }

  desenhar() {
    this.gerenciar();
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
