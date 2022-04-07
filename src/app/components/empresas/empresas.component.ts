import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.services.service';
import { UsuarioService } from 'src/app/services/usuario.service';
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
      ''
    )
    this.token = this._usuarioService.getToken()
  }

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
        this.empresasModelPost.descripcion = '';
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



  deleteEmpresa(idCat) {
    this._empresasService.eliminarEmpresa(idCat).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'La empresaaaaa ' + [this.empresasModelPost.nombre] + ' se ha eliminado correctamente'
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

