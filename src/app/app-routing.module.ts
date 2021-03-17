import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { PublicationComponent } from "./publication/publication.component";
import { ParametresComponent } from "./parametres/parametres.component";
import { NotificationComponent } from "./notification/notification.component"
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-techno', component: TechnoAddComponent},
  { path: 'publication', component: PublicationComponent}, 
  { path: 'parametres', component: ParametresComponent},
  { path: 'notification', component: NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
