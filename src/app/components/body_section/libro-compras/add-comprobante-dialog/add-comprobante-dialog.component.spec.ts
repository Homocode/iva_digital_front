import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComprobanteDialogComponent } from './add-comprobante-dialog.component';

describe('AddComprobanteDialogComponent', () => {
  let component: AddComprobanteDialogComponent;
  let fixture: ComponentFixture<AddComprobanteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComprobanteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComprobanteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
