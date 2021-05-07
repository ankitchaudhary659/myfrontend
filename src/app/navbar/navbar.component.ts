import { Component, OnInit } from '@angular/core';
import { AuthorizationserviceService } from '../Authorization/authorizationservice.service';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user ?: SocialUser;
  constructor(private authservice : AuthorizationserviceService,private auth : AuthService) {

   }

  ngOnInit(): void {
    this.auth.authState.subscribe((user)=>{
      this.user=user;
    })
  }

  signOut(): void {
    this.authservice.logout();
  }

}
