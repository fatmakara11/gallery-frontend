import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Auth} from '../../services/auth';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { email: this.email, password: this.password };

    this.http.post<boolean>('http://localhost:8080/api/auth/login', loginData).subscribe({
      next: (success: any) => {
        if (success) {
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Server error. Please try again later.';
        console.error(err);
      }
    });
  }
}


