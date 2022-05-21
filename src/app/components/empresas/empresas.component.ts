import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.services.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment, environment2 } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService, UsuarioService]

})
export class EmpresasComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;
  public empresaIDModel: Empresas;
  public token;

  constructor(
    private _empresasService: EmpresasService,
    private _usuarioService: UsuarioService
    ) {
    this.empresasModelPost = new Empresas(
      '',
      '',
      '',
      0,
      '',
      '',
      [{
        nombreProducto: '',
        precioProducto: 0,
        stock: 0
      }],
      ''
    );
    this.empresaIDModel = new Empresas('', '', '', 0, '', '',[{
      nombreProducto: '',
      precioProducto: 0,
      stock: 0
    }],
    '')
    this.token = this._usuarioService.getToken()
  }

  tipoEmpresas = environment2.tipoEmpresas;
  departamentos = environment.departamentos;

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this._empresasService.obtenerEmpresas(this.token).subscribe(
      (response) => {
        this.empresasModelGet = response.Empresas;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);

      }
    )
  }



  postEmpresas(){
    this._empresasService.agregarEmpresa(this.empresasModelPost).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Empresa Creada Correctamente'
          })
        this.getEmpresas();
        this.empresasModelPost.nombre = '';
        this.empresasModelPost.direccion = '';
        this.empresasModelPost.telefono = 0;
        this.empresasModelPost.descripcion = '';
        this.empresasModelPost.tipoEmpresa = '';
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'warning',
          title: '!Opppsss....!',
          text: 'Hubo un error en agregar o la empresa ingresada ya se encuentra creada dentro del sistema'
        })

      }
    )
  }


  obtenerEmpresasID(idEmpresa){
    this._empresasService.obtenerEmpresaID(idEmpresa).subscribe(
      response => {
        console.log(response);
        this.empresaIDModel = response.empresa;

      }
    )
  }



  editarEmpresa(){
    this._empresasService.editarEmpresa(this.empresaIDModel).subscribe(
      response => {
        console.log(response);
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Empresa editada correctamente'
          })
          this.getEmpresas();
      },
        error => {
          console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss.....!',
            text: 'No se ha podido editar la empresa'
          })
        }
    )
  }


  deleteEmpresa(idCat) {
    this._empresasService.eliminarEmpresa(idCat).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'La empresa ' + [this.empresasModelPost.nombre] + ' se ha eliminado correctamente'
        })
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'warning',
          title: '!Opppsss....!',
          text: 'No se pudo obtener las empresas de la base de datos'
        })

      }
    )
  }



}

