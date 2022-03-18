import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { CateringComponent } from './catering/catering.component';
=======
import { MenuComponent } from './menu/menu.component';
>>>>>>> 4167dc0cde20aaf21a254feea73b9d77b42db95a

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
<<<<<<< HEAD
    CateringComponent
=======
    MenuComponent
>>>>>>> 4167dc0cde20aaf21a254feea73b9d77b42db95a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
