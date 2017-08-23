import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRecruteursComponent } from './menu-recruteurs.component';

describe('MenuRecruteursComponent', () => {
  let component: MenuRecruteursComponent;
  let fixture: ComponentFixture<MenuRecruteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRecruteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRecruteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
