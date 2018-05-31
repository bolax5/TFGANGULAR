import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { UrlDecodderService } from './services/url-decodder.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HttpService, UrlDecodderService],
  exports: [HttpService, UrlDecodderService]
})
export class CoreModule { }
