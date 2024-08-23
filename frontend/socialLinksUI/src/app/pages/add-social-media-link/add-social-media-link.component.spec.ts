import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocialMediaLinkDialogComponent } from './add-social-media-link.component';

describe('AddSocialMediaLinkComponent', () => {
  let component: AddSocialMediaLinkDialogComponent;
  let fixture: ComponentFixture<AddSocialMediaLinkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSocialMediaLinkDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSocialMediaLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
