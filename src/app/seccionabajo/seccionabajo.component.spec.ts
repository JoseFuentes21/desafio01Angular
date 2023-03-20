import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionabajoComponent } from './seccionabajo.component';

describe('SeccionabajoComponent', () => {
  let component: SeccionabajoComponent;
  let fixture: ComponentFixture<SeccionabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
