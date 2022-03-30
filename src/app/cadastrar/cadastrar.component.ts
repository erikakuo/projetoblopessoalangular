import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
usuario: Usuario=new Usuario
confirmarSenha: string

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  confirmeSenha(event:any){
this.confirmarSenha=event.target.value
  }
cadastrarUsuario(){
if(this.usuario.senha != this.confirmarSenha){
  alert('Coloque suas senhas iguais!')
  }
else{
  this.authService.Cadastrar(this.usuario).subscribe((resp:Usuario): void =>{
   this.usuario=resp
   
   alert('Casdastrado com sucesso!')
  })
  
}
}

}
