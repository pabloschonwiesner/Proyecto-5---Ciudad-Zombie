/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidasOriginales: 10,
  vidas: 10,
  ultimoMov: 'v',
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover (movX, movY) {
    if (movX == 0 && movY == 0) return;

    var aux;
    this.x += movX;
    this.y += movY;
    aux = this.ancho;

    if((this.ultimoMov == 'v' && movY == 0) || (this.ultimoMov == 'h' && movX == 0)) {
      this.ancho = this.alto;
      this.alto = aux;
    }

    if(movX>0) {
      this.sprite = 'imagenes/auto_rojo_derecha.png';
      this.ultimoMov = 'h';
    }

    if(movX<0) {
      this.sprite = 'imagenes/auto_rojo_izquierda.png';
      this.ultimoMov = 'h';
    }

    if(movY>0) {
      this.sprite = 'imagenes/auto_rojo_abajo.png';
      this.ultimoMov = 'v';
    }

    if(movY<0) {
      this.sprite = 'imagenes/auto_rojo_arriba.png';
      this.ultimoMov = 'v';
    }
  },
  perderVidas (cantVidas) {
      this.vidas -=cantVidas;
  },
  perderTodasLasVidas () {
    this.vidas = 0;
  },
  completarVidas () {
    this.vidas = this.vidasOriginales;
  }

}
