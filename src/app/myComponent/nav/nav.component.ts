import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true
})
export class NavComponent {
  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
