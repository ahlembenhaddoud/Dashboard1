import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular';


import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { Page404Component } from './modules/page404/page404.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminComponent } from './admin/admin.component';
import { MatSelectModule } from '@angular/material/select';
import { UserregistrationService } from './auth/userregistration.service';






@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegistreComponent,
      Page404Component,
      AdminComponent,


   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      DefaultModule,
      MatButtonModule,
      MatPseudoCheckboxModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
      CommonModule,
      MatDividerModule,
      MatToolbarModule,
      FlexLayoutModule,
      MatMenuModule,
      MatListModule,
      HighchartsChartModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSidenavModule,
      MatSelectModule,
      HttpClient

   ],
   providers: [
    UserregistrationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
