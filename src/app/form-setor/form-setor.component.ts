import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from '../setor';
import { SetorApiService } from '../setor-api.service';

@Component({
  selector: 'form-setor',
  templateUrl: './form-setor.component.html',
  styleUrls: ['./form-setor.component.css']
})
export class FormSetorComponent implements OnInit {
  id!: number;
  mensagem="";
  setor = new Setor();
  botaoAcao = "Cadastrar";
  constructor(
    private setorApiService: SetorApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    if(this.id){
      this.botaoAcao = "Editar";
      this.setorApiService.buscarPorId(this.id).subscribe(sec => {
        this.setor = sec;
      })
    }
  }
  private estaInserindo() {
    return !this.id;
  }
  salvar() {
    if(this.estaInserindo()) {
      this.setorApiService.inserir(this.setor).subscribe(setor => {
        this.mensagem = this.setor.nameSector + "Cadastro realizado!";
        this.setor = new Setor();
      })
    }else{
      this.setorApiService.editar(this.id, this.setor).subscribe(sec =>{
        this.mensagem = `${sec.nameSector} editado com sucesso!`;
        this.setor = sec;
      })
    }
  }
  cancelar() {
    this.router.navigate(['/tabela'])
  }
}
