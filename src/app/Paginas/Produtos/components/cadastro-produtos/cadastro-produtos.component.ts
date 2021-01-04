import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../../Produtos/models/produto'
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  produtos: Array<Produto> 

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe((produtos: Produto[]) =>{
      this.produtos = produtos
    })
  }

  navegarParaCadastro(){
    this.router.navigate(['/cadastrar-produtos']);
  }

  deletar(id): void{
    this.produtoService.deletarProduto(id).subscribe(()=>{
      alert("Produto deletado com sucesso !");
      this.produtoService.listarProdutos().subscribe((backend: Produto[])=>{
        this.produtos = backend
      })
    })
  }
}
