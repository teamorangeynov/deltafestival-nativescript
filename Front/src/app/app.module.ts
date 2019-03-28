import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/pages/home/home.component'
import { AuthentificationComponent } from '../app/pages/authentification/authentification.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQRCodeReaderModule,
    FormsModule,
    MatInputModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
