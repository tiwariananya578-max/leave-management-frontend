import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apply-leave.html',
  styleUrl: './apply-leave.css'
})
export class ApplyLeave {

  leaveType = '';
  startDate = '';
  endDate = '';
  reason = '';

  constructor(private auth: Auth) {}

  applyLeave() {

    const employee = JSON.parse(localStorage.getItem('employee') || '{}');

    const leave = {

      leaveType: this.leaveType,
      startDate: this.startDate,
      endDate: this.endDate,
      reason: this.reason,
      status: 'Pending',

      employee: {
        id: employee.id
      }

    };

    this.auth.applyLeave(leave).subscribe({

      next: (response) => {

        alert('Leave Applied Successfully');

        this.leaveType = '';
        this.startDate = '';
        this.endDate = '';
        this.reason = '';

        console.log(response);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to Apply Leave');

      }

    });

  }

}