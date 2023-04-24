import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(user: User): void {

    this.authService.register(user.firstName, user.lastName, user.email, user.password).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.route.navigate(['/login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
