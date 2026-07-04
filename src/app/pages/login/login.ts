import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  login() {

    const user = {
      email: this.email,
      password: this.password
    };

    this.auth.login(user).subscribe({

      next: (response: any) => {

        if (response) {

          // Save logged-in employee
          localStorage.setItem('employee', JSON.stringify(response));

          alert('Login Successful');

          this.router.navigate(['/dashboard']);

        } else {

          alert('Invalid Email or Password');

        }

      },

      error: (error) => {

        console.error(error);

        alert('Login Failed');

      }

    });

  }

}