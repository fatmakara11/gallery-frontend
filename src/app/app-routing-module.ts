import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHome } from './component-home/component-home';
import { ComponentAbout } from './component-about/component-about';
import { ComponentGallery } from './component-gallery/component-gallery';
import {ComponentDashboard} from './component-dashboard/component-dashboard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // boş url gelirse /home yönlendir
  { path: 'home', component: ComponentHome },            // /home route'u ComponentHome bileşenini gösterir
  { path: 'about', component: ComponentAbout },
  { path: 'gallery', component: ComponentGallery },
  {path:'dashboard', component: ComponentDashboard },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
