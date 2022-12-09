import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelaFuncionarioComponent } from './tabela-funcionario/tabela-funcionario.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSetorComponent } from './form-setor/form-setor.component';
// import { TabelaSetorComponent } from './tabela-setor/tabela-setor.component';
import { TabelaSectorComponent } from './tabela-setor/tabela-setor.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
// import { TabelaSectorComponent } from './tabela-setor/tabela-setor.component';
//registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabelaFuncionarioComponent,
    FormFuncionarioComponent,
    MoedaPipe,
    FiltroPesquisaPipe,
    PageNotFoundComponent,
    FormSetorComponent,
    // TabelaSetorComponent,
    TabelaSectorComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
//    { provide: LOCALE_ID, useValue: 'pt'},
//    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
