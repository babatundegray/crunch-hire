import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChComponent } from './why-ch.component';

describe('WhyChComponent', () => {
  let component: WhyChComponent;
  let fixture: ComponentFixture<WhyChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
