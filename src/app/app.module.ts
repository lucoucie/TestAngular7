import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { PeopleService } from './services/peopleService';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdRatingComponent } from './components/rating/rating.component';
import { FilterPeople } from './shared/filterPeople';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SidebarComponent, MainPanelComponent, NgbdRatingComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, FormsModule
  ],
  providers: [PeopleService, FilterPeople],
  bootstrap: [AppComponent]
})
export class AppModule { }
