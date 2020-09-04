import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

Sentry.init({
  dsn: environment.PUBLIC_DSN,
  release: "d93bdb89bdae0631bd41ed542f3dc67e32d860aa",
  tracesSampleRate: 1.0,
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers:[
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
