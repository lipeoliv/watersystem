import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.page.html',
  styleUrls: ['./tabela.page.scss'],
})
export class TabelaPage implements OnInit {

  constructor(private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['']);
  }


}
