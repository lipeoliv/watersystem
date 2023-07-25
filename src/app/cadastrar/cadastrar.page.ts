import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  
  idusuario: string = ""; 
  nome: string = "";  
  idade: string = ""; 
  categoria : string = "";  
  cpf : string = ""; 
  email: string = "";  
  password : string = ""; 
  nivel : string = ""; 

  constructor(private router:Router,
    private actRoute:ActivatedRoute, 
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.idusuario = "";
      this.nome = data.nome;
      this.idade = data.idade;
      this.categoria = data.categoria;
      this.cpf = data.cpf;
      this.email = data.email;
      this.password = data.password;
      this.nivel = data.nivel;
 
    });  
  }
 salvar(){
    return new Promise(resolve => {
      let dados = {
        idusuario : this.idusuario,
        nome : this.nome,
        idade : this.idade,
        categoria : this.categoria,
        cpf : this.cpf,
        email : this.email,
        password : this.password,
        nivel : this.nivel
      }
      this.provider.dadosApi(dados, 'inserir.php').subscribe(
        (data : any) => {
        // console.log("Usuário Adicionado com Sucesso");
         if(data["erro"] == 0){
          this.mensagemSucesso(data['mensagem']);
          this.limparCampos();
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

  limparCampos(){
    this.nome = "";
    this.idade   = "";
    this.categoria = "";
    this.cpf  = "";
    this.email  = "";
    this.password   = "";
    this.nivel   = "";
    }
    
    backtoUsuarios(){
      this.router.navigate(['/login'])
    }

  }


 
  

