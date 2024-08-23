import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-visited-social-media-link',
  templateUrl: './last-visited-social-media-link.component.html',
  styleUrls: ['./last-visited-social-media-link.component.scss']
})
export class LastVisitedSocialMediaLinkComponent implements OnInit {
  clickedLinks: any[] = [];

  ngOnInit(): void {
    this.loadClickedLinks();
  }

  loadClickedLinks(): void {
    const storedLinks = localStorage.getItem('clickedLinks');
    if (storedLinks) {
      debugger;
      this.clickedLinks = JSON.parse(storedLinks);
    }
  }
}
