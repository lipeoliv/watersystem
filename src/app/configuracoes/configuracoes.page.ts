import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private router:Router, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['dashboard']);
  }

  gotoListUsuarios(){
    this.router.navigate(['\list-usuarios'])
  }

  gotoCadastrarResidencia(){
    this.router.navigate(['residencia'])
  }

  gotoListResidencia(){
    this.router.navigate(['residencia/list-residencia'])
  }
}
