import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
