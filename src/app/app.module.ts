import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { FormCardComponent } from './page/forget-password/form-card/form-card.component';
import { FormLoginComponent } from './page/login/form-login/form-login.component';
import { FormRegisterComponent } from './page/register/form-register/form-register.component';
import { FoodCategoryComponent } from './page/food-category/food-category.component';
import { EventsCategoryComponent } from './page/events-category/events-category.component';
import { ClassCategoryComponent } from './page/class-category/class-category.component';
import { ExperienceCategoryComponent } from './page/experience-category/experience-category.component';
import { MenuSlideComponent } from './modules/menu-slide/menu-slide.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderInicioComponent } from './page/inicio/header-inicio/header-inicio.component';
import { SlidePromotionComponent } from './modules/slide-promotion/slide-promotion.component';
import { InterestingProductsComponent } from './page/inicio/interesting-products/interesting-products.component';
import { RecommendedProductsComponent } from './page/inicio/recommended-products/recommended-products.component';
import { FoodButtomComponent } from './page/food-category/food-buttom/food-buttom.component';
import { FoodPromotionComponent } from './page/food-category/food-promotion/food-promotion.component';
import { FoodOrderComponent } from './page/food-category/food-order/food-order.component';
import { EventsTypesComponent } from './page/events-category/events-types/events-types.component';
import { EventsSlideComponent } from './page/events-category/events-slide/events-slide.component';
import { ClassContainerOneComponent } from './page/class-category/class-container-one/class-container-one.component';
import { ClassContainerTwoComponent } from './page/class-category/class-container-two/class-container-two.component';
import { ClassSlideComponent } from './page/class-category/class-slide/class-slide.component';
import { ExperienceSlideComponent } from './page/experience-category/experience-slide/experience-slide.component';
import { ExperienceProductsComponent } from './page/experience-category/experience-products/experience-products.component';
import { FavoriteComponent } from './page/favorite/favorite.component';
import { ExpenseRecordComponent } from './page/expense-record/expense-record.component';
import { ProfileComponent } from './page/profile/profile.component';
import { EditProfileComponent } from './page/edit-profile/edit-profile.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import { FavoriteHeaderComponent } from './page/favorite/favorite-header/favorite-header.component';

import { NgChartsModule } from 'node_modules/ng2-charts';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProfileHeaderComponent } from './page/profile/profile-header/profile-header.component';
import { ProfileResourcesComponent } from './page/profile/profile-resources/profile-resources.component';
import { EditProfileHeaderComponent } from './page/edit-profile/edit-profile-header/edit-profile-header.component';
import { EditProfileFormComponent } from './page/edit-profile/edit-profile-form/edit-profile-form.component';
import { TiendaComponent } from './page/tienda/tienda.component';
import { TiendaHeaderComponent } from './page/tienda/tienda-header/tienda-header.component';
import { TiendaBebidasComponent } from './page/tienda/tienda-bebidas/tienda-bebidas.component';
import { TiendaComidaComponent } from './page/tienda/tienda-comida/tienda-comida.component';
import { TiendaCuidadoPersonalComponent } from './page/tienda/tienda-cuidado-personal/tienda-cuidado-personal.component';
import { TiendaArtesaniasComponent } from './page/tienda/tienda-artesanias/tienda-artesanias.component';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';
import { CartOrdersComponent } from './page/cart-orders/cart-orders.component';
import { ConfirmarPagoComponent } from './page/confirmar-pago/confirmar-pago.component';
import { CompraFinalizadaComponent } from './page/compra-finalizada/compra-finalizada.component';
import { NotificacionesComponent } from './page/notificaciones/notificaciones.component';
import { ProductDetailsHeaderComponent } from './page/products-details/product-details-header/product-details-header.component';
import { CartOrdersHeaderComponent } from './page/cart-orders/cart-orders-header/cart-orders-header.component';

import { HeaderCategoryComponent } from './modules/header-category/header-category.component';
import { ExpenseFormComponent } from './page/expense-record/expense-form/expense-form.component';
import { SimpleHeaderComponent } from './modules/simple-header/simple-header.component';
import { NextHeaderComponent } from './modules/next-header/next-header.component';
import { HttpInterceptorModule } from './services/http-interceptor.module';
import { EditProfileCreditCardComponent } from './page/edit-profile/edit-profile-credit-card/edit-profile-credit-card.component';
import { CardComponent } from './page/edit-profile/edit-profile-credit-card/card/card.component';
import { ConfirmarPagoFormComponent } from './page/confirmar-pago/confirmar-pago-form/confirmar-pago-form.component';
import { CompraFinalizadaFormComponent } from './page/compra-finalizada/compra-finalizada-form/compra-finalizada-form.component';
import { ConfiguracionesComponent } from './page/configuraciones/configuraciones.component';
import { ConfiguracionesFormComponent } from './page/configuraciones/configuraciones-form/configuraciones-form.component';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { ChangeCurrencyComponent } from './page/change-currency/change-currency.component';
import { ChangeCurrencyFormComponent } from './page/change-currency/change-currency-form/change-currency-form.component';
import { FoodDetailsComponent } from './page/food-details/food-details.component';
import { FoodRatingsComponent } from './page/food-ratings/food-ratings.component';
import { AvailabilityComponent } from './page/availability/availability.component';
import { PreviewCateogryComponent } from './page/preview-cateogry/preview-cateogry.component';
import { HeaderDetailsComponent } from './modules/header-details/header-details.component';
import { FoodDetailsFormComponent } from './page/food-details/food-details-form/food-details-form.component';
import { FoodRatingsFormComponent } from './page/food-ratings/food-ratings-form/food-ratings-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    ForgetPasswordComponent,
    InicioComponent,
    FormCardComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FoodCategoryComponent,
    EventsCategoryComponent,
    ClassCategoryComponent,
    ExperienceCategoryComponent,
    MenuSlideComponent,
    FooterComponent,
    HeaderInicioComponent,
    SlidePromotionComponent,
    InterestingProductsComponent,
    RecommendedProductsComponent,
    FoodButtomComponent,
    FoodPromotionComponent,
    FoodOrderComponent,
    EventsTypesComponent,
    EventsSlideComponent,
    ClassContainerOneComponent,
    ClassContainerTwoComponent,
    ClassSlideComponent,
    ExperienceSlideComponent,
    ExperienceProductsComponent,
    FavoriteComponent,
    ExpenseRecordComponent,
    ProfileComponent,
    EditProfileComponent,
    FavoriteHeaderComponent,
    ProfileHeaderComponent,
    ProfileResourcesComponent,
    EditProfileHeaderComponent,
    EditProfileFormComponent,
    TiendaComponent,
    TiendaHeaderComponent,
    TiendaBebidasComponent,
    TiendaComidaComponent,
    TiendaCuidadoPersonalComponent,
    TiendaArtesaniasComponent,
    ProductsDetailsComponent,
    CartOrdersComponent,
    ConfirmarPagoComponent,
    CompraFinalizadaComponent,
    NotificacionesComponent,
    ProductDetailsHeaderComponent,
    CartOrdersHeaderComponent,
  
    HeaderCategoryComponent,
    ExpenseFormComponent,
    SimpleHeaderComponent,
    NextHeaderComponent,
    EditProfileCreditCardComponent,
    CardComponent,
    ConfirmarPagoFormComponent,
    CompraFinalizadaFormComponent,
    ConfiguracionesComponent,
    ConfiguracionesFormComponent,
    ChangePasswordComponent,
    ChangeCurrencyComponent,
    ChangeCurrencyFormComponent,
    FoodDetailsComponent,
    FoodRatingsComponent,
    AvailabilityComponent,
    PreviewCateogryComponent,
    HeaderDetailsComponent,
    FoodDetailsFormComponent,
    FoodRatingsFormComponent,

  ],
  imports: [
    HttpInterceptorModule,
    BrowserModule,
    AppRoutingModule,
    MdbCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,

    NgChartsModule,
    IvyCarouselModule,

    NgxSpinnerModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    environment.production ? BrowserAnimationsModule : NoopAnimationsModule,

  ],
  exports: [MatInputModule,
    MatFormFieldModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
