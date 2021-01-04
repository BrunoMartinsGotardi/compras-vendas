"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AtualizarClienteComponent = void 0;
var core_1 = require("@angular/core");
var AtualizarClienteComponent = /** @class */ (function () {
    function AtualizarClienteComponent(route, criarExcluirService, router) {
        this.route = route;
        this.criarExcluirService = criarExcluirService;
        this.router = router;
        this.clientes = {
            id: '',
            nome: '',
            empresa: '',
            cpf: ''
        };
    }
    AtualizarClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.router.snapshot.paramMap.get('id');
        this.criarExcluirService.lerCliente(id).subscribe(function (clientes) {
            _this.clientes = clientes;
        });
    };
    AtualizarClienteComponent.prototype.voltarTela = function () {
        this.route.navigate(["/cadastro-clientes"]);
    };
    AtualizarClienteComponent.prototype.atualizar = function () {
        var _this = this;
        this.criarExcluirService.atualizarCliente(this.clientes).subscribe(function () {
            alert("Cliente atualizado com sucesso !");
            _this.route.navigate(['/cadastro-clientes']);
        });
    };
    AtualizarClienteComponent = __decorate([
        core_1.Component({
            selector: 'app-atualizar-cliente',
            templateUrl: './atualizar-cliente.component.html',
            styleUrls: ['./atualizar-cliente.component.css']
        })
    ], AtualizarClienteComponent);
    return AtualizarClienteComponent;
}());
exports.AtualizarClienteComponent = AtualizarClienteComponent;
