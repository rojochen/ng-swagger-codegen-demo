
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserDomainModule } from './user-domain/user-domain.module';
import { PetDomainComponent } from './pet-domain/pet-domain.component';
import { ApiModule } from './api/index';
import { Configuration, ConfigurationParameters } from './api/configuration';
import { BASE_PATH } from './api/variables';
export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = { username: '', password: '', apiKeys: {} };
  return new Configuration(params);
}
@NgModule({
  declarations: [
    AppComponent,
    PetDomainComponent
  ],
  imports: [
    BrowserModule, SharedModule, UserDomainModule, ApiModule
  ],
  providers: [
    { provide: Configuration, useFactory: apiConfigFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
