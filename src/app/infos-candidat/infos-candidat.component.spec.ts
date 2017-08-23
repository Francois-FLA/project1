import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCandidatComponent } from './infos-candidat.component';

describe('InfosCandidatComponent', () => {
  let component: InfosCandidatComponent;
  let fixture: ComponentFixture<InfosCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
