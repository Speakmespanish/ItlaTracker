import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPedroMacorisComponent } from './san-pedro-macoris.component';

describe('SanPedroMacorisComponent', () => {
  let component: SanPedroMacorisComponent;
  let fixture: ComponentFixture<SanPedroMacorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanPedroMacorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanPedroMacorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
