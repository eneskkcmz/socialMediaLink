import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaLinkListComponent } from './pages/social-media-link-list/social-media-link-list.component';
import { LastVisitedSocialMediaLinkComponent } from './pages/last-visited-social-media-link/last-visited-social-media-link.component';

const routes: Routes = [
  { path: "", redirectTo: '/socialMediaLink', pathMatch: 'full' },
  { path: "socialMediaLink", component: SocialMediaLinkListComponent },
  { path: "lastVisitedSocialMediaLink", component: LastVisitedSocialMediaLinkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
