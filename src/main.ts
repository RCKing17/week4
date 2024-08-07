import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

// @ts-ignore
// platformBrowserDynamic(AppComponent, appConfig).bootstrapModule(AppModule)
//   .catch((err: any) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
