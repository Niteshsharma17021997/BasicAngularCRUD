import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent, data: {title: 'EMS - Login'}},
  { path: 'adminHome', component: AdminHomeComponent, data: {title: 'Admin - Home'}},
  { path: 'home', component: HomeComponent, data: {title: 'Home'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
