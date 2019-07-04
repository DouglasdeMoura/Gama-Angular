import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepTextComponent } from './cep-text.component';

describe('CepTextComponent', () => {
  let component: CepTextComponent;
  let fixture: ComponentFixture<CepTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
