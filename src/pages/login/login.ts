import { HomePage } from './../home/home';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formularioLogin: any

  errorEmail: boolean;
  messageEmail: string;
  messagePassword: string;
  regex = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  
  errorPassword: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    //formulario
    this.formularioLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern(this.regex), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  onSubmit(formularioLogin) {

    console.log('Login/ ', this.formularioLogin);
    let { email, password } = this.formularioLogin.controls;

    if (!this.formularioLogin.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
      }

      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword = "A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      alert("Login Realizado");
      this.navCtrl.push(HomePage);    

    }
  }


  goCadastro(){
    this.navCtrl.push(CadastroPage, {
      id: "123",
      name: "Carl"
    });
    console.log('Vá para o Cadastro!',name);
  }
  
}

