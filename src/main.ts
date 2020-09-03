import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';
// import { Integrations } from "@sentry/tracing";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


Sentry.init({
  dsn: 'https://a11ceeb7f72142f092fd3cd7b05d521a@o443363.ingest.sentry.io/5417014',
  
  // integrations: [
  //   new Integrations.BrowserTracing({
  //     tracingOrigins: ["localhost", "http://localhost:4200/"],
  //     routingInstrumentation: Sentry.routingInstrumentation,
  //   }),
  // ],
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
