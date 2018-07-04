var Regalo = function(sprite, x, y, ancho, alto, potencia) {
	Obstaculo.call(this, sprite, x, y, ancho, alto, potencia);
}

Regalo.prototype = Object.create(Obstaculo.prototype);
Regalo.prototype.constructor = Regalo;
Regalo.prototype.visible = true;

Regalo.prototype.chocar = function (jugador) {
	jugador.completarVidas();
	this.visible = false;
}