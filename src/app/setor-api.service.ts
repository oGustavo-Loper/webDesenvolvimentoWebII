import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from './setor';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class SetorApiService {

  baseAPI = "http://localhost:3000/sector";

  constructor(private http: HttpClient) { }

  listar(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.baseAPI);
  }

  inserir(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(this.baseAPI, setor, httpOptions);
  }

  buscarPorId(id:number): Observable<Setor> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Setor>(uri);  
  }

  editar(id: number, setor: Setor): Observable<Setor> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Setor>(uri, setor, httpOptions);    
  }

  deletar(id: number){
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.delete(uri);
  }
}
