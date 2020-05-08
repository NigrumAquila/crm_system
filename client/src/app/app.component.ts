import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'client';
  constructor(private auth: AuthService) {

  }
  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token')
    if(potentialToken !== null) {
      this.auth.setToken(potentialToken)
    }
  }
}