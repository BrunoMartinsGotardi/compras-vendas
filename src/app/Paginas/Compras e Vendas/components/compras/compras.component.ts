import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navegarComprarProduto(){
    this.router.navigate(['/comprar-produto'])
  }

}
