import { TabsPage } from './../pages/tabs/tabs';
import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
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
    TabsPage
  ],
  providers: []
})
export class AppModule {}
