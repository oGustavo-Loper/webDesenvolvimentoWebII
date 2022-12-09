import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  titulo = "Lista de Funcionarios";
  id!: string;
  login = new Login();
  
  constructor(private loginService: LoginApiService, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void{
    this.loginService.getInstance().get('http://localhost:3000/login')
      .subscribe((Response: any) => {

      })
  }
  realizaLogin(){
    this.loginService.loguin(this.login).subscribe(login => {
      // localStorage.setItem('token', login.token)
      window.location.href = "http://localhost:4200/tabela"
    })
  }
}