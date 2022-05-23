import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginaPrincipallComponent } from './components/pagina-principal/pagina-principall.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { Empresa2Component } from './components/empresa2/empresa2.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { ProductosEmpresaComponent } from './components/productos-empresa/productos-empresa.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    PaginaPrincipallComponent,
    SucursalesComponent,
    EmpresasComponent,
    SearchPipe,
    Empresa2Component,
    GraficasComponent,
    ProductosEmpresaComponent,
    ProductosSucursalesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
