import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  imports: [MatFormFieldModule, FormsModule]
})
export class AuthenticationComponent implements OnInit {

  email="test1@test.com";

  constructor(public authentication:AuthenticationService) { }

  ngOnInit() {
  }

  async registerAndLogin(){
    let registerData = {
      email : this.email,
      password : "Passw0rd!",
      passwordConfirm : "Passw0rd!",
    }
    await this.authentication.registerAndLogin(registerData);
  }

  async login(){
    let loginData = {
      email : this.email,
      password : "Passw0rd!"
    }
    await this.authentication.login(loginData);
  }

  async logout(){
    await this.authentication.logout();
  }

  async testAuthorize() {
    await this.authentication.testAuthorize();
  }

}
