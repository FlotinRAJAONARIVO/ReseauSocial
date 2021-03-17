import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { PublicationComponent } from './publication/publication.component';
import { ParametresComponent } from './parametres/parametres.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnoAddComponent,
    PublicationComponent,
    ParametresComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
