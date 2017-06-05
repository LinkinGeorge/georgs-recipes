import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { SvgIconComponent } from './svgicons/svg-icon/svg-icon.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { InlineHrefDirective } from './inline-href.directive';

@NgModule({
  declarations: [
    AppComponent,
    SvgIconComponent,
    PageNotFoundComponent,
    InlineHrefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipesModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
