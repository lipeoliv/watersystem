import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Api } from '../../../services/api';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-residencia',
  templateUrl: './edit-residencia.page.html',
  styleUrls: ['./edit-residencia.page.scss'],
})
export class EditResidenciaPage implements OnInit {
  
  id: string="";
  complemento: string  = "";
  cidade: string  = "";
  estado: string  = "";
  bairro: string = "";
  endereco: string  = "";

  constructor(private activatedRoute: ActivatedRoute,
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((data:any) => {
      this.id = data.id;
  });
  return new Promise(resolve => {
    let dados = {
      id : this.id,
    }
    this.provider.dadosApi(dados, 'residencia/pegar.php').subscribe(
      (data : any) => {
       if(data['itens'] == 0){
        this.mensagemSucesso(data['mensagem']);
       }else{
        for(let item of data['itens']){
         this.complemento = item.complemento;
         this.cidade  = item.cidade;
         this.estado  = item.estado;
         this.bairro = item.bairro;
         this.endereco  = item.endereco;
    
        }
      }
      }
    );
  });
  }

  
  salvar(){
    return new Promise(resolve => {
      let dados = {
        id: this.id,
        complemento : this.complemento,
        cidade : this.cidade,
        estado : this.estado,
        bairro : this.bairro,
        endereco : this.endereco,
    
      }
      this.provider.dadosApi(dados, 'residencia/editar.php').subscribe(
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
  backtoUsuarios(){
    this.router.navigate(['/list-residencia'])
  }



}
