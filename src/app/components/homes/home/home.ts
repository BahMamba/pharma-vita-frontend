import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
