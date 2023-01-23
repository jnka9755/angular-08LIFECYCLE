import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { ShowNameComponent } from './components/show-name/show-name.component';


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    ShowNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
