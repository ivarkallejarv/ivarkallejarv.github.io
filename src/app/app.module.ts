import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {DailiesComponent} from './dailies/dailies.component';
import {SharedModule} from './shared/shared.module';
import {TodoService} from './services/todo.service';
import {DailiesService} from './services/dailies.service';
import {TodoComponent} from './todo/todo.component';
import {APP_BASE_HREF} from '@angular/common';

export function appBaseHrefFactory() {
  return environment.BASE_HREF;
}

@NgModule({
  declarations: [
    AppComponent,
    DailiesComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {provide: APP_BASE_HREF, useFactory: appBaseHrefFactory},
    TodoService,
    DailiesService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
