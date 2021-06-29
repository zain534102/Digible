import { EffectsModule } from '@ngrx/effects';
import { SubjectService } from './post/services/subject.service';
import { PostService } from './post/services/post.service';
import { PostModule } from './post/post.module';
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
/*Ngrx*/
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PostModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Finlax Test Task',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [PostService],
  bootstrap: [AppComponent, SubjectService]
})
export class AppModule { }
