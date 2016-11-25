import { WiFiPage } from './../pages/wi-fi/wi-fi';
import { TabsPage } from './../pages/tabs/tabs';
import { NgModule } from '@angular/core';
import { IonicModule, IonicApp } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    WiFiPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      //mode: "md"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    WiFiPage
  ],
  providers: []
})
export class AppModule {}
