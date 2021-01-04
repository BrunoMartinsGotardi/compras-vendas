import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../models/produto'
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  produtos: Produto = {
    quantidade: '',
    id: '',
    nome: '',
    preco: '',
    estoque : '',
    total: ''
  }

  constructor(private router: Router,
     private route: ActivatedRoute,
     private produtoService: ProdutoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.produtoService.mostrarProdutosEditar(id).subscribe(produtos =>{
      this.produtos = produtos
    })
  }

  voltarParaProdutos(){
    this.router.navigate(['/produtos'])
  }

  editar(id){
    this.produtoService.editarProdutos(id).subscribe(()=> {
      alert("Produto alterado com sucesso !");
      this.voltarParaProdutos();
    })
  }

}
