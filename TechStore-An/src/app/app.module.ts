import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule  } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ParamsroutingService } from './services/paramsrouting.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { MainSectionComponent } from './admin/main-section/main-section.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddComponent } from './admin/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    MainSectionComponent,
    UsersComponent,
    ProductsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [ParamsroutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
