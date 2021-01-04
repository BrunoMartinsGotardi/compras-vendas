"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClienteService = void 0;
var core_1 = require("@angular/core");
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.url = "http://localhost:3000/clientes";
        this.clientes = {
            id: '',
            nome: '',
            empresa: '',
            cpf: ''
        };
    }
    ClienteService.prototype.cadastrarCliente = function (clientes) {
        return this.http.post(this.url, clientes);
    };
    ClienteService.prototype.deletarCliente = function (id) {
        var url = this.url + "/" + id;
        return this.http["delete"](url);
    };
    ClienteService.prototype.atualizarCliente = function (clientes) {
        var url = this.url + "/" + clientes.id;
        return this.http.put(url, clientes);
    };
    ClienteService.prototype.lerCliente = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url);
    };
    ClienteService.prototype.listarCliente = function () {
        return this.http.get("" + this.url);
    };
    ClienteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
