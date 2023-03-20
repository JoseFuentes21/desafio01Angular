import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioncompComponent } from './seccioncomp.component';

describe('SeccioncompComponent', () => {
  let component: SeccioncompComponent;
  let fixture: ComponentFixture<SeccioncompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccioncompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccioncompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
