import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarClienteDialogFormComponent } from './agregar-cliente-dialog-form.component';

describe('AgregarClienteDialogFormComponent', () => {
  let component: AgregarClienteDialogFormComponent;
  let fixture: ComponentFixture<AgregarClienteDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarClienteDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarClienteDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
