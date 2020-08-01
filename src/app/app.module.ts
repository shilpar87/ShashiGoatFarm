import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlickrService } from './flickr.service';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    LightboxModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
