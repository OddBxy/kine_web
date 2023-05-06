import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologieComponent } from './pathologie.component';

describe('PathologieComponent', () => {
  let component: PathologieComponent;
  let fixture: ComponentFixture<PathologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
