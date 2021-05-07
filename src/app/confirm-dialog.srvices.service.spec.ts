import { TestBed } from '@angular/core/testing';

import { ConfirmDialog.SrvicesService } from './confirm-dialog.srvices.service';

describe('ConfirmDialog.SrvicesService', () => {
  let service: ConfirmDialog.SrvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmDialog.SrvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
