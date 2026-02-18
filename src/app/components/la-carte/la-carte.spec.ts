import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCarte } from './la-carte';

describe('LaCarte', () => {
  let component: LaCarte;
  let fixture: ComponentFixture<LaCarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaCarte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaCarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
