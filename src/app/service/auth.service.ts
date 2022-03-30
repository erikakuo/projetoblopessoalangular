import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private html: HttpClient) {}//libera os metodos http

/*
certificar os endpoints
*/

Entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
return this.html.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin)
}
Cadastrar(usuario: Usuario): Observable<Usuario> {// da referencia a model do usuario

return this.html.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)  
  }// sinaliza a model usuario model e o usuario controller 
  logado(){
    let ok:boolean=false;


    if(environment.token!=' '){
      ok=true;
    }

    return ok;
  }

}