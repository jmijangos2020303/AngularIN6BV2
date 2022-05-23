import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa2',
  templateUrl: './empresa2.component.html',
  styleUrls: ['./empresa2.component.scss'],
  providers: [UsuarioService]

})
export class Empresa2Component implements OnInit {
  public empresasModelGet: Usuario;
  public empresasModelGetId: Usuario;
  public token;

  constructor(
    public _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken()
    this.empresasModelGetId = new Usuario('','','' ,0,'','','','');

  }

  departamentos = environment.departamentos;

  ngOnInit(): void {
    this.getEmpresas();


  }

  getEmpresas(){

      this._usuarioService.VerEmpresas(this.token).subscribe(
        (response)=>{
          this.empresasModelGet = response.Empresas;
          console.log(this.empresasModelGet)
        },
        (error)=>{
          console.log(error);
        }
      )

  }





  eliminarEmpresas(id){
    this._usuarioService.EliminarEmpresas(id,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({

          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  getEmpresasId(idEmpresa){
    this._usuarioService.obtenerEmpresaId(idEmpresa,this.token).subscribe(
      (response)=>{
        this.empresasModelGetId = response.Empresa;
        console.log(this.empresasModelGetId);
      },
      (error)=> {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  putEmpresa(){
    this._usuarioService.editarEmpresa(this.empresasModelGetId, this.token).subscribe(
      (response)=> {
        console.log(response);
        this.getEmpresas()
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
