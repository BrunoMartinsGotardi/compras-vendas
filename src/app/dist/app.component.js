"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var faAddressBook_1 = require("@fortawesome/free-regular-svg-icons/faAddressBook");
var faBuilding_1 = require("@fortawesome/free-regular-svg-icons/faBuilding");
var faCompass_1 = require("@fortawesome/free-regular-svg-icons/faCompass");
var faMoneyBillAlt_1 = require("@fortawesome/free-regular-svg-icons/faMoneyBillAlt");
var faUserCircle_1 = require("@fortawesome/free-regular-svg-icons/faUserCircle");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'compras-vendas';
        this.dadosNav = [
            { texto: "Dashboard", icone: faBuilding_1.faBuilding, rota: "/dashboard" },
            { texto: "Produtos", icone: faCompass_1.faCompass, rota: "/produtos" },
            { texto: "Conexões", icone: faAddressBook_1.faAddressBook, rota: "/conexões" },
            { texto: "Precificações", icone: faMoneyBillAlt_1.faMoneyBillAlt, rota: "/precificações" },
            { texto: "Usuarios", icone: faUserCircle_1.faUserCircle, rota: "/usuarios" }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
