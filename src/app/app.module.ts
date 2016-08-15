// import { NgModule, ApplicationRef, NgModuleFactoryLoader } from '@angular/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [],
  entryComponents: [ AppComponent ]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}
