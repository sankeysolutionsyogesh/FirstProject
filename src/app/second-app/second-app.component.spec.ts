import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAppComponent } from './second-app.component';

describe('SecondAppComponent', () => {
  let component: SecondAppComponent;
  let fixture: ComponentFixture<SecondAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondAppComponent]
    });
    fixture = TestBed.createComponent(SecondAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
