import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSideModule } from 'menu-side';
import { CadastroComponent } from './Paginas/Clientes/components/cadastro-cliente/cadastro.component';
import { TableModule } from 'primeng/table';
import { CadastroProdutosComponent } from './Paginas/Produtos/components/cadastro-produtos/cadastro-produtos.component'
import { ButtonModule } from 'primeng/button'
import { CriarExcluirComponent } from './Paginas/Clientes/components/criar-excluir/criar-excluir.component';
import { AtualizarClienteComponent } from './Paginas/Clientes/components/atualizar-cliente/atualizar-cliente.component';
import { CadastrarProdutosComponent } from './Paginas/Produtos/components/cadastrar-produtos/cadastrar-produtos.component';
import { EditarProdutosComponent } from './Paginas/Produtos/components/editar-produtos/editar-produtos.component';
import { ComprasComponent } from './Paginas/Compras e Vendas/components/compras/compras.component';
import { VendasComponent } from './Paginas/Compras e Vendas/components/vendas/vendas.component';
import { ComprasEVendasComponent } from './Paginas/Compras e Vendas/components/compras-e-vendas/compras-e-vendas.component';
import { ComprarProdutoComponent } from './Paginas/Compras e Vendas/components/compras/comprar-produto/comprar-produto/comprar-produto.component';





@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroProdutosComponent,
    CriarExcluirComponent,
    AtualizarClienteComponent,
    CadastrarProdutosComponent,
    EditarProdutosComponent,
    ComprasComponent,
    VendasComponent,
    ComprasEVendasComponent,
    ComprarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MenuSideModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
