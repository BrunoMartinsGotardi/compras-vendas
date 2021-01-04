"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var atualizar_cliente_component_1 = require("./Clientes/components/atualizar-cliente/atualizar-cliente.component");
var cadastro_component_1 = require("./Clientes/components/cadastro-cliente/cadastro.component");
var cadastro_produtos_component_1 = require("./Produtos/components/cadastro-produtos/cadastro-produtos.component");
var criar_excluir_component_1 = require("./Clientes/components/criar-excluir/criar-excluir.component");
var routes = [
    { path: 'cadastro-clientes', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro-produtos', component: cadastro_produtos_component_1.CadastroProdutosComponent },
    { path: 'criar-excluir', component: criar_excluir_component_1.CriarExcluirComponent },
    { path: 'atualizar-cliente/:id', component: atualizar_cliente_component_1.AtualizarClienteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
