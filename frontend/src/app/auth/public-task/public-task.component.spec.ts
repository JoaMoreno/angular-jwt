import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTaskComponent } from './public-task.component';

describe('PublicTaskComponent', () => {
  let component: PublicTaskComponent;
  let fixture: ComponentFixture<PublicTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
