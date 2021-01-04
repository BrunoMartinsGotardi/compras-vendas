"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastroProdutosComponent = void 0;
var core_1 = require("@angular/core");
var CadastroProdutosComponent = /** @class */ (function () {
    function CadastroProdutosComponent(http) {
        this.http = http;
        this.url = "http://localhost:3000/clientes";
        this.produtos = {
            id: '',
            nome: '',
            preço: '',
            quantidade: ''
        };
    }
    CadastroProdutosComponent.prototype.ngOnInit = function () {
    };
    CadastroProdutosComponent.prototype.listarPrdutos = function (url) {
        return this.http.get(url);
    };
    CadastroProdutosComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastro-produtos',
            templateUrl: './cadastro-produtos.component.html',
            styleUrls: ['./cadastro-produtos.component.css']
        })
    ], CadastroProdutosComponent);
    return CadastroProdutosComponent;
}());
exports.CadastroProdutosComponent = CadastroProdutosComponent;
