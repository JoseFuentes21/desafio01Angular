import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionlateralComponent } from './seccionlateral.component';

describe('SeccionlateralComponent', () => {
  let component: SeccionlateralComponent;
  let fixture: ComponentFixture<SeccionlateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionlateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
