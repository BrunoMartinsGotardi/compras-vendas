import { Component } from '@angular/core';
import {faAddressBook} from '@fortawesome/free-regular-svg-icons/faAddressBook'
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding'
import { faCompass } from '@fortawesome/free-regular-svg-icons/faCompass'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons/faMoneyBillAlt'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons/faUserCircle'
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compras-vendas';
  
  dadosNav: Array<any> = [
    {texto: "Dashboard", icone: faBuilding, rota: "/dashboard"},
    {texto: "Produtos", icone: faCompass, rota: "/produtos"},
    {texto: "Conexões", icone: faAddressBook, rota: "/conexões"},
    {texto: "Precificações", icone: faMoneyBillAlt, rota: "/precificações"},
    {texto: "Usuarios", icone: faUserCircle, rota: "/usuarios"}
  ]
}
