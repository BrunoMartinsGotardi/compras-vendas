import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = "http://localhost:3000/produtos"

  constructor(private http: HttpClient) { }
  
  listarProdutos(){
    return this.http.get(`${this.url}`)
  }

  criarProduto(produtos: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.url, produtos)
  }

  deletarProduto(id: string): Observable<Produto>{
    const url = `${this.url}/${id}`
    return this.http.delete<Produto>(url)
  }

  mostrarProdutosEditar(id: any): Observable<Produto>{
  const url = `${this.url}/${id}`
  return this.http.get<Produto>(url)
  }

  editarProdutos(produtos: Produto): Observable<Produto>{
    const id = `${this.url}/${produtos.id}`
    return this.http.put<Produto>(id, produtos)
  }

}
