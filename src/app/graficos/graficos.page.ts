import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {



  constructor(private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['dashboard']);
  }

}
