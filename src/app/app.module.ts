import { NgModule } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GifLoaderComponent } from './gif/gif-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    GifLoaderComponent
  ],
  imports: [
    BrowserModule,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
