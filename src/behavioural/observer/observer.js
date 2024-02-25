// Concrete Observable
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
// Concrete Observer
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return ParagraphObserver;
}());
// Concrete Observer
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return DivObserver;
}());
// Client code
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    paragraph.innerText = "Texto Inicial (Hardcoded)";
    return paragraph;
}
function makeDiv() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.innerText = "Texto da Div";
    return div;
}
var input = new InputObservable(makeInput());
var paragraph1 = new ParagraphObserver(makeParagraph());
var paragraph2 = new ParagraphObserver(makeParagraph());
var div1 = new DivObserver(makeDiv());
input.subscribe(paragraph1, paragraph2, div1);
input.element.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(paragraph2);
