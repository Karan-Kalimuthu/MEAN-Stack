import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
    console.log("test1");
    if (form.invalid) {
      console.log("test if");
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
    console.log("test2");

  }
}
