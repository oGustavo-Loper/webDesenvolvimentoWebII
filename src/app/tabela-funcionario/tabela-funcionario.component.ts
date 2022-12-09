import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Funcionario';
import { FuncionarioApiService } from '../funcionario-api.service';
// import { ProdutoService } from '../produto.service';

@Component({
  selector: 'tabela-funcionario',
  templateUrl: './tabela-funcionario.component.html',
  styleUrls: ['./tabela-funcionario.component.css']
})
export class TabelaFuncionarioComponent implements OnInit {
  titulo = "Lista de Funcionarios";
  namePesquisado = "";
  lista: Produto[] = []
  
  constructor(private servico: FuncionarioApiService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.lista = data;
      }
    )
  }

  deletar(id: number){
    this.servico.deletar(id).subscribe(res => {
      this.listar();
      console.log(res);
    });
  }
}