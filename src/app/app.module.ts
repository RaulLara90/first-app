import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      NavbarComponent,
      ButtonComponent,
      InputButtonComponent,
      MoviesComponent,
      AboutComponent,
      InfoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
