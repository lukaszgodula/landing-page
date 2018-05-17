import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BalloonsComponent } from './components/offer/balloons/balloons.component';
import { BubblesComponent } from './components/offer/bubbles/bubbles.component';
import { CostumesComponent } from './components/offer/costumes/costumes.component';
import { LevitationComponent } from './components/offer/levitation/levitation.component';
import { LotrComponent } from './components/offer/lotr/lotr.component';
import { OfferComponent } from './components/offer/offer.component';
import { PirateComponent } from './components/offer/pirate/pirate.component';
import { TeamComponent } from './components/team/team.component';

const APP_ID = 'mig-mig-ssr';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    AboutUsComponent,
    TeamComponent,
    FooterComponent,
    ContactComponent,
    OfferComponent,
    BubblesComponent,
    LevitationComponent,
    LotrComponent,
    BalloonsComponent,
    CostumesComponent,
    PirateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
