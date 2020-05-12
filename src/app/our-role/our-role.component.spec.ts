import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRoleComponent } from './our-role.component';

describe('OurRoleComponent', () => {
  let component: OurRoleComponent;
  let fixture: ComponentFixture<OurRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
