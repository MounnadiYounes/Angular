import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupService } from './group.service';

@NgModule({
  imports: [
    BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
  ],
  declarations: [
    AppComponent,
      GroupsComponent
  ],
  providers: [ GroupService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
