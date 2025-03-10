import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { Channel } from './models/models';
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { ChatComponent } from "./components/chat/chat.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AuthenticationComponent, ChatComponent]
})
export class AppComponent {

  title = 'SignalR Chat';

  constructor(){

  }
}



