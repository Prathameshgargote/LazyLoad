import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductdashboardComponent } from './poductdashboard.component';

describe('PoductdashboardComponent', () => {
  let component: PoductdashboardComponent;
  let fixture: ComponentFixture<PoductdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
