import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SideMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SideMenuPage Page');
  }

}