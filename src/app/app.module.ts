import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { DirectiveMenuDirective } from './directive/directive-menu.directive';
import { DirectivePictureDirective } from './directive/directive-picture.directive';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveMenuDirective,
    DirectivePictureDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
