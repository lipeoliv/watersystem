import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import {Router} from '@angular/router';

import { GlobalVar } from '../globals/global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  url: string = "";
  appname: string = "dashboard";


  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
   // { title: 'Cadastrar', url: '/cadastrar', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router,
    public global:GlobalVar) {
  router.events.subscribe(event => {
    if(event instanceof NavigationEnd){
      this.url = event.url;
      console.log(this.url);
    }

});

  }

  sair(){
    this.global.unAuthenticateUser();
    this.router.navigate(['login']);
  }
}
