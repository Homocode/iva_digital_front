import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportComprobantesDialogComponent } from './import-comprobantes-dialog.component';

describe('ImportComprobantesDialogComponent', () => {
  let component: ImportComprobantesDialogComponent;
  let fixture: ComponentFixture<ImportComprobantesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportComprobantesDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportComprobantesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
