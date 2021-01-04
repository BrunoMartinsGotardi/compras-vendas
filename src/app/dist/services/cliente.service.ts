import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Clientes } from '../../Clientes/models/atualizar-cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:3000/clientes"

  clientes: Clientes = {
    id: '',
    nome: '',
    empresa: '',
    cpf: ''
  }

  constructor(private http: HttpClient) { }


  cadastrarCliente(clientes: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(this.url, clientes)
  }


  deletarCliente(id: string): Observable<Clientes>{
    const url = `${this.url}/${id}`
    return this.http.delete<Clientes>(url)
  }

  atualizarCliente(clientes: Clientes): Observable<Clientes>{
    const url = `${this.url}/${clientes.id}`
    return this.http.put<Clientes>(url, clientes)
  }

  lerCliente(id: any): Observable<Clientes>{
    const url = `${this.url}/${id}`
    return this.http.get<Clientes>(url)
  }

  listarCliente() {
    return this.http.get(`${this.url}`)
  }

}
