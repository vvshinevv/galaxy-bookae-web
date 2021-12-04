import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/common/layout/layout.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { MetaverseComponent } from './pages/promotion/metaverse/metaverse.component';
import { PersonaComponent } from './pages/promotion/persona/persona.component';
import { ProgramComponent } from './pages/promotion/program/program.component';
import { PromotionLayoutComponent } from './pages/promotion/layout/promotion-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MetaverseComponent,
    PersonaComponent,
    ProgramComponent,
    PromotionLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
