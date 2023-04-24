import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  constructor(public tokenStorageService: TokenStorageService) {
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
