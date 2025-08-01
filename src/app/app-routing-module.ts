import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Public Components
import { PublicLayout } from './public/public-layout/public-layout';
import { Home } from './public/pages/home/home';
import { About } from './public/pages/about/about';
import { Departments } from './public/pages/departments/departments';
import { Teams } from './public/pages/teams/teams';
import { Contact } from './public/pages/contact/contact';

// Admin Components
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { Login } from './admin/login/login';
import { Dashboard} from './admin/dashboard/dashboard';
import { DepartmentManager } from './admin/department-manager/department-manager';
import { TeamManager } from './admin/team-manager/team-manager';
import { EmployeeManager } from './admin/employee-manager/employee-manager';

// Guard (ileride eklenecek)
//import { AuthGuard } from './core/auth.guard'; // yoksa commentle

const routes: Routes = [
  // PUBLIC ROUTES
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About},
      { path: 'departments', component: Departments },
      { path: 'teams', component: Teams },
      { path: 'contact', component: Contact },
    ]
  },

  // ADMIN LOGIN (ayrı sayfa)
  { path: 'admin-login', component: Login },

  // ADMIN ROUTES
  {
    path: 'admin',
    component: AdminLayout,
    //canActivate: [AuthGuard], // Giriş yapmamışsa yönlendirme yapılır
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'department-manager', component: DepartmentManager },
      { path: 'team-manager', component: TeamManager },
      { path: 'employee-manager', component: EmployeeManager },
    ]
  },

  // 404 redirect
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
