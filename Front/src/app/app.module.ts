import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/pages/home/home.component'
import { AuthentificationComponent } from '../app/pages/authentification/authentification.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { RankingComponent } from './pages/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
    RankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQRCodeReaderModule,
    FormsModule,
    MatInputModule,
    ZXingScannerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
