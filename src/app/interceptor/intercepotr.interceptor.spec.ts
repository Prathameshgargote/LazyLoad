import { TestBed } from '@angular/core/testing';

import { IntercepotrInterceptor } from './intercepotr.interceptor';

describe('IntercepotrInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntercepotrInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntercepotrInterceptor = TestBed.inject(IntercepotrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
