import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacionIvaDialogComponent } from './liquidacion-iva-dialog.component';

describe('LiquidacionIvaDialogComponent', () => {
  let component: LiquidacionIvaDialogComponent;
  let fixture: ComponentFixture<LiquidacionIvaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidacionIvaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidacionIvaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
