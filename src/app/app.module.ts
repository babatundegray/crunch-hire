import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FAQsComponent } from './faqs/faqs.component';
import { OurRoleComponent } from './our-role/our-role.component';
import { WhyChComponent } from './why-ch/why-ch.component';
import { HowWeVetComponent } from './how-we-vet/how-we-vet.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SubscribeComponent,
    FAQsComponent,
    OurRoleComponent,
    WhyChComponent,
    HowWeVetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
