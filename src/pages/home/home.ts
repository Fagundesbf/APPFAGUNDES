import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public rootPage: any = HomePage;

  constructor(public navCtrl: NavController) {


    
    

  }
  ionViewDidLoad(){
    setInterval(()=>{
      console.log('123')
    },1000); 
  }




}
