import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';

import { MainModule } from './main/main.module';

@NgModule({
    declarations: [AppComponent, IntroComponent, MainComponent],
    imports     : [BrowserModule, HttpModule, FormsModule, MainModule, RouterModule.forRoot(appRoutes)],
    providers   : [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap   : [AppComponent]
})

export class AppModule {

}
