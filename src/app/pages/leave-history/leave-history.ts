import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-history.html',
  styleUrl: './leave-history.css'
})
export class LeaveHistory implements OnInit {

  leaves: any[] = [];

  constructor(private auth: Auth) {}

  ngOnInit(): void {

    const employee = JSON.parse(localStorage.getItem('employee') || '{}');

    this.auth.getEmployeeLeaves(employee.id).subscribe({

      next: (response: any) => {

        this.leaves = response;
        console.log(this.leaves);

      },

      error: (error) => {

        console.error(error);

      }

    });

  }

}