import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComponentHome } from './component-home/component-home';
import { ComponentAbout } from './component-about/component-about';
import { ComponentGallery } from './component-gallery/component-gallery';
import { ComponentNavbar } from './component-navbar/component-navbar';
import { ComponentDashboard } from './component-dashboard/component-dashboard';

@NgModule({
  declarations: [
    App,
    ComponentHome,
    ComponentAbout,
    ComponentGallery,
    ComponentNavbar,
    ComponentDashboard  // buraya ekle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    // ComponentDashboard buradan çıkar
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
