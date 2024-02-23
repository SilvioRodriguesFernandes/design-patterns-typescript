abstract class Forma {
  protected abstract calcularArea(): number;

  public obterArea(): number {
    console.log(`Calculando a área da forma ${this.constructor.name}.`);
    const area = this.calcularArea();
    console.log(`Área: ${area}`);
    return area;
  }
}

class Quadrado extends Forma {
  private readonly lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  protected calcularArea(): number {
    return this.lado * this.lado;
  }
}

class Circulo extends Forma {
  private readonly raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  protected calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

const quadrado = new Quadrado(5);
quadrado.obterArea();

const circulo = new Circulo(10);
circulo.obterArea();
