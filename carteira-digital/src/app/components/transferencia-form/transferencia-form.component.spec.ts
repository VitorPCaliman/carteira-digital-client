import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaFormComponent } from './transferencia-form.component';

describe('TransferenciaFormComponent', () => {
  let component: TransferenciaFormComponent;
  let fixture: ComponentFixture<TransferenciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
