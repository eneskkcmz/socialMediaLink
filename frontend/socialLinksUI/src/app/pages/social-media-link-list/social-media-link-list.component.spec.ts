import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialMediaLinkListComponent } from './social-media-link-list.component';

describe('SocialMediaLinkListComponent', () => {
  let component: SocialMediaLinkListComponent;
  let fixture: ComponentFixture<SocialMediaLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialMediaLinkListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SocialMediaLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
