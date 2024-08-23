import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastVisitedSocialMediaLinkComponent } from './last-visited-social-media-link.component';

describe('LastVisitedSocialMediaLinkComponent', () => {
  let component: LastVisitedSocialMediaLinkComponent;
  let fixture: ComponentFixture<LastVisitedSocialMediaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastVisitedSocialMediaLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastVisitedSocialMediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
