import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ProductosEmpresaComponent } from './components/productos-empresa/productos-empresa.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipallComponent } from './components/pagina-principal/pagina-principall.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { UsuarioGuard } from './guards/usuario.guard';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "inicio", component: PaginaPrincipallComponent},
  {path: "sucursales", component: SucursalesComponent},
  {path: "empresas", component: EmpresasComponent},
  {path: 'productoempresa', component: ProductosEmpresaComponent},
  {path: 'productosucursal', component: ProductosSucursalesComponent},
  {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
