import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOnboardingComponent } from './register-onboarding.component';

describe('RegisterOnboardingComponent', () => {
  let component: RegisterOnboardingComponent;
  let fixture: ComponentFixture<RegisterOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
