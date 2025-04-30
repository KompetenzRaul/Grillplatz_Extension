import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferGalleryComponent } from './offer-gallery.component';

describe('OfferGalleryComponent', () => {
  let component: OfferGalleryComponent;
  let fixture: ComponentFixture<OfferGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
