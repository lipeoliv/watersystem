import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { ApiMqtt } from '../../services/api.mqtt';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.page.html',
  styleUrls: ['./consumo.page.scss'],
})
export class ConsumoPage implements OnInit {
  server: string = "http://localhost";
  port: string = "3000";
  vazao: string = "";
  fluxo: string = "";
  metros: string = "";
  gasto: string = "";
  sensors1: any;
  sensors2: any;
  sensors3: any;
  sensors4: any;
  

  constructor(private router:Router, private activateRoute: ActivatedRoute,
    private apimqtt: ApiMqtt) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['/dashboard']);
  }
  pegarDadosSensores(){
    this.apimqtt.dadosSensores(this.server, this.port).subscribe((data: any) =>{
      this.sensors1 = data.sensors1;
      this.sensors2 = data.sensors2;
      this.sensors3 = data.sensors3;
      this.sensors4 = data.sensors4;

      this.vazao = this.sensors1;
      this.fluxo = this.sensors2;
      this.metros = this.sensors3;
      this.gasto = this.sensors4;

    });
  }

}
