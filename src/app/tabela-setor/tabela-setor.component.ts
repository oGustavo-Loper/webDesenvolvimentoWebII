import { Component, OnInit } from '@angular/core';
import { Setor } from '../setor';
import { SetorApiService } from '../setor-api.service';

@Component({
  selector: 'app-tabela-setor',
  templateUrl: './tabela-setor.component.html',
  styleUrls: ['./tabela-setor.component.css']
})
export class TabelaSectorComponent implements OnInit {
  titulo = "Lista de Setores";
  namePesquisado = "";
  lista: Setor[] = []
  
  constructor(private servico: SetorApiService) {
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