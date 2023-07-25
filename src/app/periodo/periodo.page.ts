import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.page.html',
  styleUrls: ['./periodo.page.scss'],
})
export class PeriodoPage implements OnInit {

  constructor(private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['dashboard']);
  }

}
