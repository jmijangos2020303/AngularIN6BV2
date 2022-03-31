import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.services.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService]

})
export class EmpresasComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;

  constructor(private _empresasService: EmpresasService) {
    this.empresasModelPost = new Empresas(
      '',
      '',
      ''
    )
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this._empresasService.obtenerEmpresas().subscribe(
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
        this.getEmpresas();
        this.empresasModelPost.nombre = '';
        this.empresasModelPost.descripcion = '';
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}

