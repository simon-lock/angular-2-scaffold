import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './components/app/app.component';
import { HomeComponent }   from './components/home/home.component';
import { AboutComponent }      from './components/about/about.component';
import { NotFoundComponent }      from './components/not-found/not-found.component';

import { AppRoutingModule }     from './routing/routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
