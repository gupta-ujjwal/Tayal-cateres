import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexPageComponent } from './index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
