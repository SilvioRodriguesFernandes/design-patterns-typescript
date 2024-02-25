interface Sujeito {
  temperatura: number;
  registrarObservador(observador: Observador): void;
  removerObservador(observador: Observador): void;
  notificarObservadores(): void;
}

interface Observador {
  atualizar(temperatura: number): void;
}

class Termometro implements Sujeito {
  public temperatura: number;
  private observadores: Observador[] = [];

  constructor(temperaturaInicial: number) {
    this.temperatura = temperaturaInicial;
  }

  get temperaturaAtual(): number {
    return this.temperatura;
  }

  registrarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  removerObservador(observador: Observador): void {
    const index = this.observadores.indexOf(observador);
    if (index >= 0) {
      this.observadores.splice(index, 1);
    }
  }

  notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.atualizar(this.temperatura);
    }
  }

  atualizarTemperatura(novaTemperatura: number): void {
    this.temperatura = novaTemperatura;
    this.notificarObservadores();
  }
}

class DisplayTemperatura implements Observador {
  constructor(private readonly elemento: HTMLElement) {}

  atualizar(temperatura: number): void {
    this.elemento.textContent = `Temperatura: ${temperatura}ºC`;
  }
}

const termometro = new Termometro(15);

const display1 = new DisplayTemperatura(
  document.getElementById('display1') as HTMLElement,
);
const display2 = new DisplayTemperatura(
  document.getElementById('display2') as HTMLElement,
);

termometro.registrarObservador(display1);
termometro.registrarObservador(display2);

termometro.atualizarTemperatura(18);
