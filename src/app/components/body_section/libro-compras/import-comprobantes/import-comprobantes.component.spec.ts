import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportComprobantesComponent } from './import-comprobantes.component';

describe('ImportComprobantesComponent', () => {
  let component: ImportComprobantesComponent;
  let fixture: ComponentFixture<ImportComprobantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportComprobantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
