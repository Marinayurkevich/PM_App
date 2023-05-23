import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColumnCreateComponent } from './new-column-create.component';

describe('NewColumnCreateComponent', () => {
  let component: NewColumnCreateComponent;
  let fixture: ComponentFixture<NewColumnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewColumnCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewColumnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
