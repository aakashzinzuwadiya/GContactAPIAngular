import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailComponentComponent } from './gmail-component.component';

describe('GmailComponentComponent', () => {
  let component: GmailComponentComponent;
  let fixture: ComponentFixture<GmailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
