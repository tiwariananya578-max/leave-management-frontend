import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

    const employee = localStorage.getItem('employee');

    if (!employee) {
      this.router.navigate(['/']);
    }

  }

  logout() {

    localStorage.removeItem('employee');

    alert("Logged Out Successfully");

    this.router.navigate(['/']);

  }

}