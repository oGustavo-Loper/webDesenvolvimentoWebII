import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../Funcionario';
import { FuncionarioApiService } from '../funcionario-api.service';
import {MatSelectModule} from '@angular/material/select';
// import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit {
  id!: number;
  mensagem = "";
  produto = new Produto();
  botaoAcao = "Cadastrar";

  constructor(
    private produtoApiService: FuncionarioApiService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    console.log("ID", this.id);
    if(this.id) {
      this.botaoAcao= "Editar";      
      //this.produto = Object.assign({}, 
      //  this.produtoApiService.buscarPorId(this.id));
      this.produtoApiService.buscarPorId(this.id).subscribe(prod => {
        this.produto = prod;  
        console.log(this.produto);   
      })
    }
  }

  private estaInserindo() {
    return !this.id;
  }

  salvar() {
    if(this.estaInserindo()) {
      this.produtoApiService.inserir(this.produto).subscribe(produto => {
        console.log("Produto Cadastrado", produto);
        this.mensagem = this.produto.name + " cadastrado com sucesso!";
        this.produto = new Produto();
      });

    }
    else {
      this.produtoApiService.editar(this.id, this.produto).subscribe(prod => {
        this.mensagem = `${prod.name} editado com sucesso!`; 
        this.produto = prod;
      })

    }
  }

  cancelar() {
    //Ir para a rota '/tabela'
    this.router.navigate(['/tabela']);
  }
}
