import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './header/top/top.component';
import { SearchComponent } from './header/search/search.component';
import { HeadComponent } from './header/head/head.component';
import { BannerComponent } from './header/banner/banner.component';
import { WelcomeComponent } from './body/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SearchComponent,
    HeadComponent,
    BannerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
