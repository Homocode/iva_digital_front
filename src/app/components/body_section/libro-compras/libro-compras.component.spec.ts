import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroComprasComponent } from './libro-compras.component';

describe('LibroComprasComponent', () => {
  let component: LibroComprasComponent;
  let fixture: ComponentFixture<LibroComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
