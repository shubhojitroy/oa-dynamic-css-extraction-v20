import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = 'OA Application Client Logo';
  constructor(private router: Router) {}

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}
