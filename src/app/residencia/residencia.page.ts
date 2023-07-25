import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

import { Api } from '../../services/api';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ModalResidenciaPage } from "../residencia/modal-residencia/modal-residencia.page";




@Component({
  selector: 'app-residencia',
  templateUrl: './residencia.page.html',
  styleUrls: ['./residencia.page.scss'],
})
export class ResidenciaPage implements OnInit {

 id: string="";
 complemento: string  = "";
 cidade: string  = "";
 estado: string  = "";
 bairro: string = "";
 endereco: string  = "";
 fk_idusuario : string = "";
 proprietario : string = "";

  constructor(private router:Router,
     private actRoute: ActivatedRoute,
     private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalCtrl: ModalController) { }

  ngOnInit() {

     
 
    } 

    salvar(){
 
      return new Promise(resolve => {
        let dados = {
          id : this.id,
          complemento : this.complemento,
          cidade : this.cidade,
          estado : this.estado,
          bairro : this.bairro,
          endereco : this.endereco,
          fk_idusuario : this.fk_idusuario,
          proprietario : this.proprietario,
         
        }
        this.provider.dadosApi(dados, 'residencia/inserir.php').subscribe(
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
    
    async openModal() {
      const modal = await this.modalCtrl.create({
        component: ModalResidenciaPage,
      });
      modal.present();
    
      const { data, role } = await modal.onWillDismiss();
    
      if (role === 'confirm') {
        //this.message = `Hello, ${data}!`;
        //console.log(this.message);
        this.fk_idusuario = data[0];
        this.proprietario = data [1];
      }
    }
    
    carregarUsuario(){
        return new Promise(resolve => {
          let dados = {
            idusuario: this.fk_idusuario,
          }
          this.provider.dadosApi(dados, 'usuario/pegar.php').subscribe((data: any) => {
            if (data['itens'] == '0') {
                this.mensagemErro(data['mensagem']);
            } else {
             this.proprietario = data['itens'][0].nome;
            
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
      backtoCarrros(){
        this.router.navigate(['/carros'])
      }
    
      limparCampos(){
        this.complemento  = "";
        this.cidade  = "";
        this. estado = "";
        this.bairro = "";
        this.endereco = "";
        this.fk_idusuario  = "";
        this.proprietario  = "";

      }

  backtoMain(){
    this.router.navigate(['configuracoes']);
  }

}
