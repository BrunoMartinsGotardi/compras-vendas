import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {
  
  clientes: Cliente = {
    id: '',
    nome: '',
    empresa: '',
    cpf: ''
  }
  

  constructor(private route: Router,
     private criarExcluirService: ClienteService,
     private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    this.criarExcluirService.lerCliente(id).subscribe(clientes =>{
      this.clientes = clientes
    })
  }

  voltarTela(): void{
    this.route.navigate(["/cadastro-clientes"])
  }

  atualizar(): void{
    this.criarExcluirService.atualizarCliente(this.clientes).subscribe(()=> {
      alert("Cliente editado com sucesso !")
      this.route.navigate(['/cadastro-clientes'])
    })
  }

}
