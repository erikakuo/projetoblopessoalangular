import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
  private http: HttpClient

  ) { }
  token={ //importação do http headers pra autorizar o usuario a fazer postagem
  headers: new HttpHeaders().set('Authorization',environment.token)
  //criamos um objeto token e colocamos o set pra validar
  }
  postarTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>('Http://localhost:8080/tema', tema, this.token)
  }
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)
  }

}
