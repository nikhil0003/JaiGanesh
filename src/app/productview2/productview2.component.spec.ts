import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productview2Component } from './productview2.component';

describe('Productview2Component', () => {
  let component: Productview2Component;
  let fixture: ComponentFixture<Productview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
