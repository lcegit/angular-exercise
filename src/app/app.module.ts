import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    NgModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
