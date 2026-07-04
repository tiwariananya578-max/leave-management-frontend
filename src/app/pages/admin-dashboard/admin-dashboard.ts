import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {

  leaves: any[] = [];

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    this.loadLeaves();
  }

  loadLeaves() {
    this.auth.getAllLeaves().subscribe({
      next: (response: any) => {
        this.leaves = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  approve(id: number) {
    this.auth.approveLeave(id).subscribe({
      next: () => {
        alert('Leave Approved');
        this.loadLeaves();
      }
    });
  }

  reject(id: number) {
    this.auth.rejectLeave(id).subscribe({
      next: () => {
        alert('Leave Rejected');
        this.loadLeaves();
      }
    });
  }

}