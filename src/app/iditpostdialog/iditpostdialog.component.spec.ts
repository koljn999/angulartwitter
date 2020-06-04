import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IditpostdialogComponent } from './iditpostdialog.component';

describe('IditpostdialogComponent', () => {
  let component: IditpostdialogComponent;
  let fixture: ComponentFixture<IditpostdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IditpostdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IditpostdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
