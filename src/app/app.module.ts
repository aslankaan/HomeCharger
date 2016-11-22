

import { SideMenuPage } from './../pages/side-menu/side-menu';
import {MainNavPage} from '../pages/main-nav/main-nav';
import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainNavPage,
    SideMenuPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainNavPage,
    SideMenuPage
  ],
  providers: []
})
export class AppModule {}
