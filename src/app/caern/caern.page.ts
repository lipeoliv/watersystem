import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-caern',
  templateUrl: './caern.page.html',
  styleUrls: ['./caern.page.scss'],
})
export class CaernPage implements OnInit {

  constructor(private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  backtoMain(){
    this.router.navigate(['']);
  }


}
