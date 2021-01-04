import { Router } from '@angular/router'

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  clientes: Array<Cliente>

  constructor(private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarCliente().subscribe((clientes: Cliente[]) =>{
      this.clientes = clientes
    })
  }

  navegarCriarProduto(): void{
    this.router.navigate(['/criar-excluir'])
  }

  deletar(id): void{
    this.clienteService.deletarCliente(id).subscribe(() => {
      alert("Cliente excluido com sucesso !")
      this.clienteService.listarCliente().subscribe((backend: Cliente[]) =>{
        this.clientes = backend
      })
    })
  }
}
