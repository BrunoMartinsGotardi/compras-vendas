import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-e-vendas',
  templateUrl: './compras-e-vendas.component.html',
  styleUrls: ['./compras-e-vendas.component.css']
})
export class ComprasEVendasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarCompras(){
    this.router.navigate(['./compras']);
  }

  navegarVendas(){
    this.router.navigate(['/vendas']);
  }

  

}
