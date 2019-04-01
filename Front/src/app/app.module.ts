import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { AuthentificationComponent } from '../app/pages/authentification/authentification.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { RankingComponent } from '../app/pages/ranking/ranking.component';

import { environment } from '../environments/environment';

import { ApiModule } from '../services/api.module';

// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// import { NativeScriptHttpModule } from 'nativescript-angular/http';
// import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// import { NativeScriptRouterModule } from 'nativescript-angular/router';
// import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
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
    ApiModule,
    // NativeScriptFormsModule,
    // NativeScriptHttpModule,
    // NativeScriptRouterModule,
    // NativeScriptModule,
  ],
  providers: [
    { provide: 'https://localhost:44398', useValue: 'https://localhost:44398' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
