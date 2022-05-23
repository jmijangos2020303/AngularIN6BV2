import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { environment, environment2 } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public usuarioModelPost: Usuario;
  public usuarioModel: Usuario;
  repeatPass: string = '';
  public token;

  constructor(private _usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModelPost = new Usuario(
      "",
      "",
      "",
      0,
      "",
      "",
      "",
      ""
    );

    this.token = this._usuarioService.getToken();
  }

  tipoEmpresas = environment2.tipoEmpresas;
  departamentos = environment.departamentos;

  ngOnInit(): void {
  }


  postRegistarEmpresa(){
    this._usuarioService.RegistrarEmpresa(this.usuarioModelPost, this.token).subscribe(
      (response) => {
        console.log(response);

        this.usuarioModelPost._id = '';
        this.usuarioModelPost.nombre = '';
        this.usuarioModelPost.email = '';
        this.usuarioModelPost.telefono = 0;
        this.usuarioModelPost.direccion = '';
        this.usuarioModelPost.password = '';
        this.usuarioModelPost.rol = '';
        this.usuarioModelPost.tipoEmpresa = ''
        this._router.navigate(['/login'])
        Swal.fire({
          icon: 'success',
          title: 'Se Registro la Empresa',
          showConfirmButton: false,
          timer: 1500
        })

      },
      (error) => {
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
