var Termometro = /** @class */ (function () {
    function Termometro(temperaturaInicial) {
        this.observadores = [];
        this.temperatura = temperaturaInicial;
    }
    Object.defineProperty(Termometro.prototype, "temperaturaAtual", {
        get: function () {
            return this.temperatura;
        },
        enumerable: false,
        configurable: true
    });
    Termometro.prototype.registrarObservador = function (observador) {
        this.observadores.push(observador);
    };
    Termometro.prototype.removerObservador = function (observador) {
        var index = this.observadores.indexOf(observador);
        if (index >= 0) {
            this.observadores.splice(index, 1);
        }
    };
    Termometro.prototype.notificarObservadores = function () {
        for (var _i = 0, _a = this.observadores; _i < _a.length; _i++) {
            var observador = _a[_i];
            observador.atualizar(this.temperatura);
        }
    };
    Termometro.prototype.atualizarTemperatura = function (novaTemperatura) {
        this.temperatura = novaTemperatura;
        this.notificarObservadores();
    };
    return Termometro;
}());
var DisplayTemperatura = /** @class */ (function () {
    function DisplayTemperatura(elemento) {
        this.elemento = elemento;
    }
    DisplayTemperatura.prototype.atualizar = function (temperatura) {
        this.elemento.textContent = "Temperatura: ".concat(temperatura, "\u00BAC");
    };
    return DisplayTemperatura;
}());
var termometro = new Termometro(15);
var display1 = new DisplayTemperatura(document.getElementById('display1'));
var display2 = new DisplayTemperatura(document.getElementById('display2'));
termometro.registrarObservador(display1);
termometro.registrarObservador(display2);
termometro.atualizarTemperatura(18);
