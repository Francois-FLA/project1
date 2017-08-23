import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetotaleComponent } from './pagetotale.component';

describe('PagetotaleComponent', () => {
  let component: PagetotaleComponent;
  let fixture: ComponentFixture<PagetotaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetotaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetotaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
