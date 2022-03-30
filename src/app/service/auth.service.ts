import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html:HttpClient) { 
  }
    Cadastrar(usuario: Usuario):Observable<Usuario>{
      return this.html.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario);

    /*}
    Entrar(usuario: Entrar):Observable<Entrar>{
      return this.html.post<Entrar>('http://localhost:8080/usuarios/entrar')
    }

  }
  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }*/
}
}
