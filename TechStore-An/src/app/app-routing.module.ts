import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AddComponent } from './admin/add/add.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UsersComponent } from './admin/users/users.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { allProducts} from './products/allproducts/allproducts.component';
import { ProductSideBarComponent } from './products/product-side-bar/product-side-bar.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: "", component: MainHomeComponent},

  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
         path: 'users',
         component: UsersComponent
      },
      {
         path: 'products',
         component: ProductsComponent
      }
      ,
      {
         path: 'add',
         component: AddComponent
      },
     
  ]
  
  },
  {path: 'products', component:allProducts},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
