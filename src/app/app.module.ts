import { AppComponent } from './app.component';
import { HeroService } from './Services/hero-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from '../app/Heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dash-board/dash-board.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }