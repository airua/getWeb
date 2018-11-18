import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //creo variable donde recoger datos para mostrarlos en html
  //como no se indica nada, tipo any
  usuarios
  constructor(public navCtrl: NavController,
              public proveedor: ProveedorProvider) {

  }
  
  ionViewDidLoad() {
    this.proveedor.cargarDatos().subscribe((data)=>{this.usuarios=data;},
                                            (error)=>{console.log(error);})
  }
  

}
