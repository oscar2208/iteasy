import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;


  constructor(public fb: FormBuilder, public alertController:AlertController) {

    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Llena todos los campos.',
          buttons: ['Aceptar']
        });
      
        await alert.present();
      }

      var usuario = {
        nombre: f.nombre,
        password: f.password
      }

      /* localStorage.getItem('usuario',JSON.stringify(usuario)); */

    }

  }







