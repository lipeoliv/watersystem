import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: string = "";
  public password: string = "";

  constructor(private provider: Api,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    
  }


 

  async mensagemLogin(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     color : 'success',
    });

    await toast.present();
  }


  
  async mensagemErro(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     color : 'danger',
    });

    await toast.present();
  }

  ionviewWillEnter(){
    this.usuario = "";
    this.password = "";

  }


  login(){ 
    console.log("estar aq!");
    return new Promise(resolve => {
      let dados = {
        usuario : this.usuario,
        password : this.password,
      }
      this.provider.dadosApi(dados, 'login/login.php').subscribe(
        (data : any) => {
        // console.log("Usuário Adicionado com Sucesso");
         if(data['ok'] == true){
          this.mensagemLogin(data['mensagem']);
          this.router.navigate(['dashboard'])
         }else{
          this.mensagemErro(data['mensagem'])
         }
        }
      );
    });
   

  }

}
