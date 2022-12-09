import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabelaFuncionarioComponent } from './tabela-funcionario/tabela-funcionario.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { TabelaSectorComponent } from './tabela-setor/tabela-setor.component';
import { FormSetorComponent } from './form-setor/form-setor.component'
import { TabelaSectorComponent } from './tabela-setor/tabela-setor.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const rotas: Routes = [
  { path: 'tabela', component: TabelaFuncionarioComponent },
  { path: 'novo', component: FormFuncionarioComponent },
  { path: 'tabela2', component: TabelaSectorComponent },
  { path: 'novo2', component: FormSetorComponent },
  { path: 'edit/:id', component: FormFuncionarioComponent},
  { path: 'edit2/:id', component: FormSetorComponent},
  { path: 'login', component: TelaLoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
