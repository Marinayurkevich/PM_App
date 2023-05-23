import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardCreateComponent } from './new-board-create.component';

describe('NewBoardCreateComponent', () => {
  let component: NewBoardCreateComponent;
  let fixture: ComponentFixture<NewBoardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoardCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBoardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
