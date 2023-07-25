import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-vazamentos',
  templateUrl: './vazamentos.page.html',
  styleUrls: ['./vazamentos.page.scss'],
})
export class VazamentosPage implements OnInit {

  constructor(private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['']);
  }


}
