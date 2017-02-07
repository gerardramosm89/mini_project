import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from './services/get_sample_data';
import { HttpModule } from '@angular/http'; //need HTTP Module so we can bring it in as Imports
import { SearchComponent } from './components/search_table';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ], //added Http Module
  declarations: [
    AppComponent,
    SearchComponent ],
  bootstrap: [ AppComponent ],
  providers: [DataService] //adding our DataService as a provider so we can fetch data
})
export class AppModule {}
