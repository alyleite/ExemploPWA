import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ImgCardComponent } from './img-card/img-card.component';
import { DogService } from './services/dog.service';
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HttpHandler } from '@angular/common/http';
import { HttpInterceptingHandler } from '@angular/common/http/src/module';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
    })
  ],
  providers: [
    DogService,
    HttpClient,
    { provide: HttpHandler, useClass: HttpInterceptingHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
