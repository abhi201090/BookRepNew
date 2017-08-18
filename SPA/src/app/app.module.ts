import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {NavigationList} from './app.navigation-list.component';
import {RouteTest} from './app.route-test.component';
import {Home} from './app.home.component';
import {Fake} from './app.fake.component';
import {NavigationContent} from './app.navigation-content.component';
import {appRoutingProviders,routing} from './app.routes';
import {UploadModal} from './app.upload-modal.component';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent, NavigationList, RouteTest, Home, NavigationContent, Fake, UploadModal
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, routing, ModalModule.forRoot()
  ],
  entryComponents:[UploadModal],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
