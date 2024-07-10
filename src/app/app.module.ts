import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { CommonModule } from '@angular/common';
import { MarkdownModule} from 'ngx-markdown'
import { SecurityContext } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    CommonModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
