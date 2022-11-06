import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddComponent } from './admin/add/add.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { allProducts } from './products/allproducts/allproducts.component';
import { ProductSideBarComponent } from './products/product-side-bar/product-side-bar.component';
import { CardComponent } from './products/card/card.component';
import { CartComponent } from './cart/cart.component';

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
    AddComponent,
    MainHomeComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    allProducts,
    ProductSideBarComponent,
    CardComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,

  ],
  providers: [ParamsroutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
