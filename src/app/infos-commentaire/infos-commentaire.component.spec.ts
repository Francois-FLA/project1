import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCommentaireComponent } from './infos-commentaire.component';

describe('InfosCommentaireComponent', () => {
  let component: InfosCommentaireComponent;
  let fixture: ComponentFixture<InfosCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
