import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegidos',
  templateUrl: './protegidos.component.html',
  styleUrl: './protegidos.component.css'
})
export class ProtegidosComponent {
  constructor(public auth: AuthService) { }

}
