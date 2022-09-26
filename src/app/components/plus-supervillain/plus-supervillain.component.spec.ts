import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusSupervillainComponent } from './plus-supervillain.component';

describe('PlusSupervillainComponent', () => {
  let component: PlusSupervillainComponent;
  let fixture: ComponentFixture<PlusSupervillainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusSupervillainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusSupervillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
