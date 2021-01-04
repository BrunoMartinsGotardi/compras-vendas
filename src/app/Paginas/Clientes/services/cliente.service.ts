import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:3000/clientes"

  constructor(private http: HttpClient) { }


  cadastrarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente)
  }

  deletarCliente(id: string): Observable<Cliente>{
    const url = `${this.url}/${id}`
    return this.http.delete<Cliente>(url)
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente>{
    const url = `${this.url}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }
  
  lerCliente(id: any): Observable<Cliente>{
    const url = `${this.url}/${id}`
    return this.http.get<Cliente>(url)
  }

  listarCliente() {
    return this.http.get(`${this.url}`)
  }

}
