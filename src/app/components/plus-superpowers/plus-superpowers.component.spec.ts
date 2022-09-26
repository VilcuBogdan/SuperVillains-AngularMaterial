import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusSuperpowersComponent } from './plus-superpowers.component';

describe('PlusSuperpowersComponent', () => {
  let component: PlusSuperpowersComponent;
  let fixture: ComponentFixture<PlusSuperpowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusSuperpowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusSuperpowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
