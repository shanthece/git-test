import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingPageComponent } from './banking-page.component';

describe('BankingPageComponent', () => {
  let component: BankingPageComponent;
  let fixture: ComponentFixture<BankingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
