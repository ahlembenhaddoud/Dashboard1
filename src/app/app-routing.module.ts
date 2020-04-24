import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostesComponent } from './modules/postes/postes.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { LoginComponent } from './auth/login/login.component';
import { Page404Component } from './modules/page404/page404.component';
import { AdminComponent } from './admin/admin.component';




const routes: Routes = [
  {
    path: 'auth/login',
component: LoginComponent
  },
  {
    path: 'auth/registre',
    component: RegistreComponent
  },

  {
    path: '',
    component:DefaultComponent,
    children:
    [
      {
        path: '',
    component: DashboardComponent
      },
      {
        path: 'posts',
    component: PostesComponent
      },
    ]
  },
  {
    path: 'admin',
component: AdminComponent,
 children:
[
  {
    path: 'auth/registre',
    component: RegistreComponent
  },
]
  },
  {
    path: '**',
component: Page404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
