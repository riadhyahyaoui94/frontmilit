import { TestBed } from '@angular/core/testing';

import {StatistiqueService} from "./statistiques.service";

describe('StatistiqueService', () => {
  let service: StatistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
