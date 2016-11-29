import { Component } from '@angular/core';
import * as WifiWizard from '../../../plugins/com.pylonproducts.wifiwizard/www/WifiWizard.js';


/*
  Generated class for the WiFi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
let wifi_list;
let connected: boolean = false;

@Component({
  selector: 'page-wi-fi',
  templateUrl: 'wi-fi.html'
})
export class WiFiPage {
  info: any;
  show_spinner = false;
  connected: boolean = false;
  constructor() {
    
  }



  getScanResult() {
     WifiWizard.getScanResults(this.scan_success, this.scan_fail);
     this.show_spinner = true; 
        setTimeout(()=>{
          this.info = wifi_list;
          this.show_spinner = false; 
        },1000);

  }
  connectNetwork(ssid, wifiPassword){
    console.log(ssid + " " + wifiPassword)
    let wifi: any = WifiWizard.formatWifiConfig(ssid, wifiPassword, "WPA"); 
    WifiWizard.addNetwork(wifi, this.connect_success, this.connect_fail);
    WifiWizard.connectNetwork(ssid, this.connect_success, this.connect_fail);
    if(connected){
      this.connected = true;
    }else{
      this.connected = false;
    }
  }

  scan_fail(e){
    console.log("Failed"+e);
  }

  scan_success(a){
    console.log("List: "+a);
    wifi_list = a;
  }

  connect_fail(e){
    console.log("Connection failed.");
    connected = false;
  }
  connect_success(a){
    console.log("Connected!");
    connected = true;
  }
}

