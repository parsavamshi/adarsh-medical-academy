import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInnerComponent } from './contact-inner.component';

describe('ContactInnerComponent', () => {
  let component: ContactInnerComponent;
  let fixture: ComponentFixture<ContactInnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInnerComponent]
    });
    fixture = TestBed.createComponent(ContactInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
