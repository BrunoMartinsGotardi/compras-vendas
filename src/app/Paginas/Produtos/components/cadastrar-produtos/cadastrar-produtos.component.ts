import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  constructor(private router: Router, private produtoService: ProdutoService) { }

  produtos: Produto ={
    quantidade: '',
    id: 0,
    nome: '',
    preco: '',
    estoque : '',
    total: ''
  }

  ngOnInit(): void {
  }

  voltarParaProdutos(){
    this.router.navigate(['/cadastro-produtos'])
  }

  cadastrar(): void{
    this.produtoService.criarProduto(this.produtos).subscribe(()=>{
      alert("Produto criado com sucesso !");
      this.voltarParaProdutos();
    })
  }
}
