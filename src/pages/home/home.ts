import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public rootPage: any = HomePage;

  ocultados = false;

  constructor(public navCtrl: NavController) {


    
    

  }
  ionViewDidLoad(){
    setInterval(()=>{
      console.log('123')
    },1000); 
  }


  ocultaValores(){
    console.log('ocultados');
    this.ocultados = true;
  }
  exibeValores(){
    console.log('exibidos');
    this.ocultados = false;  
  }

}
