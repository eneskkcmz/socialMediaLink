import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMediaLinkComponent } from './update-media-link.component';

describe('UpdateMediaLinkComponent', () => {
  let component: UpdateMediaLinkComponent;
  let fixture: ComponentFixture<UpdateMediaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMediaLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
