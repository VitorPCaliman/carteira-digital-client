import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoListComponent } from './extrato-list.component';

describe('ExtratoListComponent', () => {
  let component: ExtratoListComponent;
  let fixture: ComponentFixture<ExtratoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtratoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtratoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
