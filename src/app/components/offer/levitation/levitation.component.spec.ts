import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevitationComponent } from './levitation.component';

describe('LevitationComponent', () => {
  let component: LevitationComponent;
  let fixture: ComponentFixture<LevitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
