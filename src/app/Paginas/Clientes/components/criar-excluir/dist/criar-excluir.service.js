"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CriarExcluirService = void 0;
var core_1 = require("@angular/core");
var CriarExcluirService = /** @class */ (function () {
    function CriarExcluirService(http) {
        this.http = http;
        this.url = "http://localhost:3000/clientes";
        this.clientes = {
            id: '',
            nome: '',
            empresa: '',
            cpf: ''
        };
    }
    CriarExcluirService.prototype.cadastrarCliente = function (clientes) {
        return this.http.post(this.url, clientes);
    };
    CriarExcluirService.prototype.deletarCliente = function (id) {
        var url = this.url + "/" + id;
        return this.http["delete"](url);
    };
    CriarExcluirService.prototype.atualizarCliente = function (clientes) {
        var url = this.url + "/" + clientes.id;
        return this.http.put(url, clientes);
    };
    CriarExcluirService.prototype.lerCliente = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url);
    };
    CriarExcluirService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CriarExcluirService);
    return CriarExcluirService;
}());
exports.CriarExcluirService = CriarExcluirService;
