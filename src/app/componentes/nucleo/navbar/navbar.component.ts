import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
