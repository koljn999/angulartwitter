import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpostdialogComponent } from './editpostdialog.component';

describe('IditpostdialogComponent', () => {
  let component: EditpostdialogComponent;
  let fixture: ComponentFixture<EditpostdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpostdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpostdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
