import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarClienteComponent } from './Paginas/Clientes/components/atualizar-cliente/atualizar-cliente.component';
import { CadastroComponent } from './Paginas/Clientes/components/cadastro-cliente/cadastro.component'
import { CadastroProdutosComponent } from './Paginas/Produtos/components/cadastro-produtos/cadastro-produtos.component'
import { CriarExcluirComponent } from './Paginas/Clientes/components/criar-excluir/criar-excluir.component';
import { CadastrarProdutosComponent } from './Paginas/Produtos/components/cadastrar-produtos/cadastrar-produtos.component';
import { EditarProdutosComponent } from './Paginas/Produtos/components/editar-produtos/editar-produtos.component';
import { ComprasEVendasComponent } from './Paginas/Compras e Vendas/components/compras-e-vendas/compras-e-vendas.component';
import { ComprasComponent } from './Paginas/Compras e Vendas/components/compras/compras.component';
import { VendasComponent } from './Paginas/Compras e Vendas/components/vendas/vendas.component';
import { ComprarProdutoComponent } from './Paginas/Compras e Vendas/components/compras/comprar-produto/comprar-produto/comprar-produto.component';

const routes: Routes = [
  {path: 'cadastro-clientes', component: CadastroComponent},
  {path: 'cadastro-produtos', component: CadastroProdutosComponent},
  {path: 'criar-excluir', component: CriarExcluirComponent},
  {path: 'atualizar-cliente/:id', component: AtualizarClienteComponent},
  {path: 'cadastrar-produtos', component: CadastrarProdutosComponent},
  {path: 'editar-produto/:id', component: EditarProdutosComponent},
  {path: 'compras-e-vendas', component: ComprasEVendasComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'vendas', component:VendasComponent},
  {path: 'comprar-produto', component:ComprarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
