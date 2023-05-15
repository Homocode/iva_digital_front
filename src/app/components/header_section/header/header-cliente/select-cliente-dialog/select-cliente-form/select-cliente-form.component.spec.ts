import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClienteFormComponent } from './select-cliente-form.component';

describe('SelectClienteFormComponent', () => {
  let component: SelectClienteFormComponent;
  let fixture: ComponentFixture<SelectClienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClienteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectClienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
