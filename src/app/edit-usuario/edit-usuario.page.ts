import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Api } from '../../services/api';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.page.html',
  styleUrls: ['./edit-usuario.page.scss'],
})
export class EditUsuarioPage implements OnInit {
  idusuario: string = ""; 
  nome: string = "";   
  cpf : string = ""; 
  email: string = "";  
  password : string = ""; 

  constructor(private activatedRoute: ActivatedRoute,
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data:any) => {
      this.idusuario = data.idusuario;
  });
  return new Promise(resolve => {
    let dados = {
      idusuario : this.idusuario,
    }
    this.provider.dadosApi(dados, 'usuario/pegar.php').subscribe(
      (data : any) => {
       if(data['itens'] == 0){
        this.mensagemSucesso(data['mensagem']);
       }else{
        for(let item of data['itens']){
         this.nome = item.nome;
         this.cpf  = item.cpf;
         this.email = item.email;
         this.password = item.password;
        }
      }
      }
    );
  });
  }

  salvar(){
    return new Promise(resolve => {
      let dados = {
        idusuario : this.idusuario,
        nome : this.nome,
        cpf : this.cpf,
        email : this.email,
        password : this.password,
    
      }
      this.provider.dadosApi(dados, 'usuario/editar.php').subscribe(
        (data : any) => {
         if(data['erro'] == 0){
          this.mensagemSucesso(data['mensagem']);
         }else if(data['erro'] == 1) {
          this.mensagemErro(data['mensagem'])
         }
        }
      );
    });
  }

  async mensagemSucesso(msg: string ) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async mensagemErro(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     color : 'danger',
    });

    await toast.present();
  }


}
