import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing-module"; // doğru dosya adı ve küçük harfli

import { App } from './app';

// Public Components
import { PublicLayout } from './public/public-layout/public-layout';
import { Home } from './public/pages/home/home';
import { About } from './public/pages/about/about';
import { Departments } from './public/pages/departments/departments';
import { Teams } from './public/pages/teams/teams';
import { Contact } from './public/pages/contact/contact';
import { Nav } from './public/components/nav/nav';

// Admin Components
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { Login } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { DepartmentManager } from './admin/department-manager/department-manager';
import { TeamManager } from './admin/team-manager/team-manager';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { EmployeePage } from './employee/employee-page/employee-page';
import { EmployeeAddPanel } from './employee/employee-add-panel/employee-add-panel';
import { EmployeeFilter } from './employee/employee-filter/employee-filter';
import {CommonModule} from '@angular/common';
import {EmployeeManager} from './employee/employee-manager/employee-manager';



@NgModule({
  declarations: [
    App,

    // Public
    PublicLayout,
    Home,
    About,
    Departments,
    Teams,
    Contact,
    Nav,

    // Admin
    AdminLayout,
    Login,
    DepartmentManager,
    TeamManager,
    EmployeeManager,
    Dashboard,
    EmployeePage,
    EmployeeAddPanel,
    EmployeeFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
