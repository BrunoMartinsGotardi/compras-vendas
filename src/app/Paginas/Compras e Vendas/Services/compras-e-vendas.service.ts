import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../Produtos/models/produto';
import { Cliente } from "../../Clientes/models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ComprasEVendasService {

  urlClientes = "http://localhost:3000/clientes"
  urlProdutos = "http://localhost:3000/produtos"

  cliente: Cliente
  produtos: Produto

  constructor(private http: HttpClient,) { }


  listarProdutos(): Observable<any>{
    return this.http.get(this.urlProdutos)
  }
  
  listarClientes(): Observable<any>{
    return this.http.get(this.urlClientes)
  }
}
