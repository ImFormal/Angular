import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxListComponent } from './fox-list.component';

describe('FoxListComponent', () => {
  let component: FoxListComponent;
  let fixture: ComponentFixture<FoxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoxListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
