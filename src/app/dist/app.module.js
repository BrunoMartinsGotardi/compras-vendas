"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var menu_side_1 = require("menu-side");
var cadastro_component_1 = require("./Clientes/components/cadastro-cliente/cadastro.component");
var table_1 = require("primeng/table");
var cadastro_produtos_component_1 = require("./Produtos/components/cadastro-produtos/cadastro-produtos.component");
var button_1 = require("primeng/button");
var criar_excluir_component_1 = require("./Clientes/components/criar-excluir/criar-excluir.component");
var atualizar_cliente_component_1 = require("./Clientes/components/atualizar-cliente/atualizar-cliente.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cadastro_component_1.CadastroComponent,
                cadastro_produtos_component_1.CadastroProdutosComponent,
                criar_excluir_component_1.CriarExcluirComponent,
                atualizar_cliente_component_1.AtualizarClienteComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                menu_side_1.MenuSideModule,
                table_1.TableModule,
                button_1.ButtonModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
