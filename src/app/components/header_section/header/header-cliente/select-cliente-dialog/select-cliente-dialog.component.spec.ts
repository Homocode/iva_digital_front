import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClienteDialogComponent } from './select-cliente-dialog.component';

describe('SelectClienteDialogComponent', () => {
  let component: SelectClienteDialogComponent;
  let fixture: ComponentFixture<SelectClienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClienteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
