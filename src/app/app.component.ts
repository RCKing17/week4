import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account/account.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,AccountComponent,RouterLink,FormsModule,
    NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4tut';
}
