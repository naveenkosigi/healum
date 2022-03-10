import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appRoutingModule } from 'modules/app.routing.module';
import { articleNotesReducer } from 'reducers/article-notes-reducer';
import { pictureNotesReducer } from 'reducers/picture-notes-reducer';
import { notesTextReducer} from 'reducers/text-notes-reducer';
import { environment } from 'src/environments/environment';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    StoreModule.forRoot({textNotesState:notesTextReducer,articleNotesState:articleNotesReducer,pictureNotesState:pictureNotesReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
