import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { FoodCategoryComponent } from './page/food-category/food-category.component';
import { EventsCategoryComponent} from './page/events-category/events-category.component';
import { ClassCategoryComponent } from './page/class-category/class-category.component';
import { ExperienceCategoryComponent } from './page/experience-category/experience-category.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { NotificacionesComponent } from './page/notificaciones/notificaciones.component';

import { ConfiguracionesComponent } from './page/configuraciones/configuraciones.component';


import { FavoriteComponent } from './page/favorite/favorite.component';
import { ExpenseRecordComponent } from './page/expense-record/expense-record.component';
import { ProfileComponent } from './page/profile/profile.component';
import { EditProfileComponent } from './page/edit-profile/edit-profile.component';
import { CheckLoginImplementsCanActivateGuard } from './guards/check-login---implements-can-activate.guard';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { ChangeCurrencyComponent } from './page/change-currency/change-currency.component';

import { AvailabilityComponent } from './page/availability/availability.component';
import { PreviewCateogryComponent } from './page/preview-cateogry/preview-cateogry.component';


import { FoodDetailsComponent } from './page/food-details/food-details.component';
import { FoodRatingsComponent } from './page/food-ratings/food-ratings.component';

import { CartOrdersComponent } from './page/cart-orders/cart-orders.component';
import { ConfirmarPagoComponent } from './page/confirmar-pago/confirmar-pago.component';
import { CompraFinalizadaComponent } from './page/compra-finalizada/compra-finalizada.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [CheckLoginImplementsCanActivateGuard]}, 
  {path: 'registro', component: RegisterComponent}, 
  {path: 'recuperar-contraseña', component: ForgetPasswordComponent}, 
  {path: 'inicio', component: InicioComponent}, 
  
  {path: 'detalle/plato/:id', component:FoodDetailsComponent},
  {path: 'valoracion/plato/:id', component:FoodRatingsComponent},
  {path: 'disponibilidad/orden', component:AvailabilityComponent},
  {path: 'detalle/orden', component:PreviewCateogryComponent},

  {path: 'comida', component: FoodCategoryComponent, data: {title: 'Deleitate', description: 'Con nuestras ricas comidas', image: '../assets/images/Breakfast-coffee-scrambled-eggs-bread_3840x2160.jpg'}},
  {path: 'eventos', component: EventsCategoryComponent, data: {title: 'Descubre', description: 'Una nueva experiencia' , image: '../assets/images/20497496.jpg'}}, 
  {path: 'clases', component: ClassCategoryComponent, data: {title: 'Descubre', description: 'La diversion a un tap', image: '../assets/images/5331034.jpg'}}, 
  {path: 'experiencias', component: ExperienceCategoryComponent, data: {title: 'Disfruta', description: 'De una sabrosa experiencia', image: '../assets/images/Spaghetti-Pasta-Noodles-Italian-4k-2784-Wallpapers-and-Free-.jpg'}}, 
  
  {path: 'perfil', component: ProfileComponent}, 
  {path: 'editar-perfil', component: EditProfileComponent}, 
  
  {path: 'registro-gastos', component: ExpenseRecordComponent, data: {title: 'Actividad de gastos', description: ''}},
  {path: 'favoritos',component: FavoriteComponent, data: {title: 'Tus favoritos', description: 'Los productos que mas te gustaron'}},
  {path: 'tienda', component: TiendaComponent}, 
  {path: 'detalle-producto', component: ProductsDetailsComponent},
  
  {path: 'carrito', component:CartOrdersComponent, data: {title: 'Resumen de tu orden', description: ''}},
  {path: 'confirmar-pago', component:ConfirmarPagoComponent, data: {title: 'Confirmar pago', description: ''}},
  {path: 'compra-finalizado', component:CompraFinalizadaComponent, data: {title: 'Confirmar pago', description: ''}}, 
  {path: 'notificaciones', component: NotificacionesComponent}, 
  
  {path: 'configuraciones', component: ConfiguracionesComponent, data: {title: 'Configuraciones', description: ''}},
  {path: 'cambiar-contraseña', component: ChangePasswordComponent, data: {title: 'Configuraciones', description: ''}},
  {path: 'cambiar-divisa', component: ChangeCurrencyComponent, data: {title: 'Configuraciones', description: ''}},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
