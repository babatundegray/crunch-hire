import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeVetComponent } from './how-we-vet.component';

describe('HowWeVetComponent', () => {
  let component: HowWeVetComponent;
  let fixture: ComponentFixture<HowWeVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
