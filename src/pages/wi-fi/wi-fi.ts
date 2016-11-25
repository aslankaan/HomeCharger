import { Component } from '@angular/core';
import * as WifiWizard from '../../../plugins/com.pylonproducts.wifiwizard/www/WifiWizard.js';

/*
  Generated class for the WiFi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
let that;

@Component({
  selector: 'page-wi-fi',
  templateUrl: 'wi-fi.html'
})
export class WiFiPage {
  info: any;

  constructor() {
  }


  fail(e){
    console.log("Failed"+e);
  }

  success(a){
    console.log("List: "+a);
    that = a;
  }

  startScan() { 
    WifiWizard.startScan(
      ()=>{console.log("Scan Started");},
      ()=>{console.log("Scan Failed");}
    );
  }

  getScanResult() {
     WifiWizard.getScanResults(this.success, this.fail);
     this.info = that;
  }
}
