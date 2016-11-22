import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MainNav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-nav',
  templateUrl: 'main-nav.html'
})
export class MainNavPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MainNavPage Page');
  }

}
