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
  ],
  providers: [PostService],
  bootstrap: [AppComponent, SubjectService]
})
export class AppModule { }
