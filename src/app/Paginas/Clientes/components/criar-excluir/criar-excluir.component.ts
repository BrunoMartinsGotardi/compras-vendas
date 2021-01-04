import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-criar-excluir',
  templateUrl: './criar-excluir.component.html',
  styleUrls: ['./criar-excluir.component.css']
})
export class CriarExcluirComponent implements OnInit {

  clientes: Cliente

  constructor(private router: Router, private criarExcluirService: ClienteService) { }

  ngOnInit(): void {
  }

  voltarTela(): void{
    this.router.navigate(['/cadastro-clientes'])
  }

  cadastrar(): void{
    this.criarExcluirService.cadastrarCliente(this.clientes).subscribe(() =>{
      alert("Cliente cadastrado com sucesso !")
      this.voltarTela()
    })
  }
  }

