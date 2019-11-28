import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formularioCadastro: any
  
  errorNome:boolean;
  messageNome:string;
  errorEmail: boolean;
  messageEmail: string;
  messagePassword: string;
  errorConfirmePassword: boolean;
  messageConfirmePassword: string;
  errorPassword: boolean;


  regex = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  id: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    ) {

    //FORMULARIO CADASTRO
    this.formularioCadastro = formBuilder.group({
      nome:['',Validators.compose([Validators.maxLength(10),Validators.required])],
      sobrenome:[''],
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern(this.regex), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20)])],
      confirmePassword:['',Validators.compose([Validators.required])]  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
    console.log(this.id);
  }

  onSubmit(formularioCadastro){
    console.log('true');
    let { nome,email, password,confirmePassword } = this.formularioCadastro.controls;

    if (!this.formularioCadastro.valid) {
      if (!nome.valid) {
        this.errorNome = true;
        this.messageNome = "Ops! nome deve conter no máximo 10 caracters";
      } else {
        this.messageNome = ""
      }
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
      if ((confirmePassword.value!=password.value)) {
      
          console.log('FUNCIONA');
          this.errorConfirmePassword = true;
          this.messageConfirmePassword = "Ops! a senha nao está igual!"
      }
        else {
          this.messageConfirmePassword = "";
       
        } 
    }
    else {
      alert("CadasformularioCadastro Realizado");
    }
  }

}
