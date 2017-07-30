import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';

import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';

// Feature Modules
import { AnalyticModule } from '../analytic/analytic.module';

// Components
import { HomeComponent } from './home/home.component';


// Services


// Routes
import { AppRouting } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    HeaderComponent,
    InfoComponent,
    HomeComponent,
    ProjectComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    // Routes
    AppRouting,

    // Feature Modules
    AnalyticModule
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
