"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CriarExcluirComponent = void 0;
var core_1 = require("@angular/core");
var CriarExcluirComponent = /** @class */ (function () {
    function CriarExcluirComponent(router, criarExcluirService) {
        this.router = router;
        this.criarExcluirService = criarExcluirService;
        this.clientes = {
            id: '',
            nome: '',
            empresa: '',
            cpf: ''
        };
    }
    CriarExcluirComponent.prototype.ngOnInit = function () {
    };
    CriarExcluirComponent.prototype.voltarTela = function () {
        this.router.navigate(['/cadastro-clientes']);
    };
    CriarExcluirComponent.prototype.cadastrar = function () {
        var _this = this;
        this.criarExcluirService.cadastrarCliente(this.clientes).subscribe(function () {
            alert("Cliente criado com sucesso !");
            _this.voltarTela();
        });
    };
    CriarExcluirComponent = __decorate([
        core_1.Component({
            selector: 'app-criar-excluir',
            templateUrl: './criar-excluir.component.html',
            styleUrls: ['./criar-excluir.component.css']
        })
    ], CriarExcluirComponent);
    return CriarExcluirComponent;
}());
exports.CriarExcluirComponent = CriarExcluirComponent;
