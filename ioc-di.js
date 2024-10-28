class Motor {
  start() {
    console.log('Motor started');
  }
}

class Carro {
  constructor() {
    this.motor = new Motor();
  }

  ligar() {
    this.motor.start();
    console.log('Carro ligado');
  }
}