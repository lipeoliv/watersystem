import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../../services/api';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list-residencia',
  templateUrl: './list-residencia.page.html',
  styleUrls: ['./list-residencia.page.scss'],
})
export class ListResidenciaPage implements OnInit {

  itens: any = [];
  pesquisa: string ="";
  start: number = 0;
  limit: number = 10;


  constructor(private router: Router,
    private provider: Api,
    private toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  backtoMain() {
    this.router.navigate(['/configuracoes'])
  }

  carregar() {
    return new Promise(resolve => {
      let dados = {
        pesquisa: this.pesquisa,
        start: this.start,
        limit: this.limit
        
      }
      this.provider.dadosApi(dados, 'residencia/listar.php').subscribe((data: any) => {
        if (data['itens'] == '0') {
          if(this.start > 0){
            this.start -= this.limit;
            this.carregar();
            this.mensagemErro("Final Da Paginação!");
          }
        } else {
          this.itens = [];
          for (let item of data['itens']) {
            this.itens.push(item);
          }
        }
      }
      );
    });
  }

  async mensagemErro(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     color : 'danger',
    });

    await toast.present();
  }
paginaAnterior(){
  this.start -= this.limit;
  if(this.start < 0){
      this.start = 0;
      this.mensagemErro("Início Da Paginação")
  }
  this.carregar();
}
paginaPosterior(){
    this.start += this.limit;
    this.carregar();
}

editarUsuario(id: string){
  this.router.navigate(['/edit-residencia/'+id])
}

excluirUsuario(id: String) {
  return new Promise(resolve => {
    let dados = {
     id: id,
      
    }
    this.provider.dadosApi(dados, 'residencia/excluir.php').subscribe((data: any) => {
      if (data['erro'] == '1') {
        this.mensagemErro(data['mensagem']);
      } else if(data['erro'] == 0){
        this.mensagemSucesso(data['mensagem']);
        this,this.carregar();
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

}
