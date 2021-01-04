import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasEVendasService } from '../../../../Services/compras-e-vendas.service';
import { Produto } from '../../../../../Produtos/models/produto';
import { Cliente } from '../../../../../Clientes/models/cliente';
import { ItemVenda } from 'src/app/Paginas/Compras e Vendas/models/item-venda';


@Component({
  selector: 'app-comprar-produto',
  templateUrl: './comprar-produto.component.html',
  styleUrls: ['./comprar-produto.component.css']
})
export class ComprarProdutoComponent implements OnInit {

  clienteSelecionado: Cliente

  itensDaVenda: Array<ItemVenda> = [{
    quantidade: 0,
    produtoID: 0,
    mercadoria: '',
    preco: 0,
    total: 0
  }]

  procurarProdutos: string

  produtos: Array<Produto> = []

  clientes: Array<Cliente> = []

  constructor(private router: Router,
    private comprasEVendasService: ComprasEVendasService) { }

  ngOnInit(): void {
    this.comprasEVendasService.listarClientes().subscribe((clientes) => {
      this.clientes = clientes
    })
    this.comprasEVendasService.listarProdutos().subscribe((produtos) => {
      this.produtos = produtos
    })
  }

  voltarParaCompras() {
    this.router.navigate(['/compras'])
  }

  carregarCodigo(posicao) {
    //Acessar Array itens na posição informada
    //extrair produtoID do item na posição e salvar em uma variavel
    //Acessar Array de produtos e filtrar pelo produtoID extraido
    //Armazenar o retorno do filtro em outro Array
    //Verificar se o tamanho do retorno do novo Array é maior que 0
    //Se o tamanho do Array for maior que 0, extrair o produto na posição 0
    //Preencher a mercadoria e o preço do item na posição informada com os dados respectivos do produto
    let produtoId = this.itensDaVenda[posicao].produtoID
    let produtosFiltrados = this.produtos.filter((produto) => {
      if (produtoId === produto.id) {
        return true
      } else {
        return false
      }
    })
    if (produtosFiltrados.length > 0) {
      let produto = produtosFiltrados[0]
      this.itensDaVenda[posicao].mercadoria = produto.nome
      this.itensDaVenda[posicao].preco = Number.parseFloat(produto.preco)
      this.atualizaTotal(posicao)
    }
  }

  atualizaTotal(posicao) {
    this.itensDaVenda[posicao].total = this.itensDaVenda[posicao].quantidade
      * this.itensDaVenda[posicao].preco
  }
  
  verificaTotal(posicao) {
    if (this.itensDaVenda[posicao].quantidade > 0 && this.itensDaVenda[posicao].preco > 0) {
      this.atualizaTotal(posicao)
    } else {
      this.itensDaVenda[posicao].total = 0.0
    }
  }

}
