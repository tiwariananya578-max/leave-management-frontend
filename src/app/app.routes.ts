import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { ApplyLeave } from './pages/apply-leave/apply-leave';
import { LeaveHistory } from './pages/leave-history/leave-history';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'apply', component: ApplyLeave },
  { path: 'history', component: LeaveHistory },
  { path: 'admin', component: AdminDashboard }
];
