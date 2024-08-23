import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaLinkListComponent } from './pages/social-media-link-list/social-media-link-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSocialMediaLinkDialogComponent } from './pages/add-social-media-link/add-social-media-link.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateMediaLinkComponent } from './pages/update-media-link/update-media-link.component';
import { LastVisitedSocialMediaLinkComponent } from './pages/last-visited-social-media-link/last-visited-social-media-link.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaLinkListComponent,
    AddSocialMediaLinkDialogComponent,
    UpdateMediaLinkComponent,
    LastVisitedSocialMediaLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [{ provide: 'BASE_API_URL', useValue: environment.baseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
