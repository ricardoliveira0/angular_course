import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should grant that 1 + 1 = 2',
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.compute(1, 1, CalculatorService.ADDITION);
      expect(sum).toEqual(2);
    })
  );
  
  it('should grant that 10 - 5 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let sub = service.compute(10, 5, CalculatorService.SUBTRACTION);
      expect(sub).toEqual(5);
    })
  );

  it('should grant that 10 * 2 = 20',
    inject([CalculatorService], (service: CalculatorService) => {
      let mult = service.compute(10, 2, CalculatorService.MULTIPLICATION);
      expect(mult).toEqual(20);
    })
  );

  it('should grant that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let div = service.compute(1, 4, CalculatorService.DIVISION);
      expect(div).toEqual(0.25);
    })
  );

  it('should return 0 to an invalid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.compute(1, 4, "%");
      expect(invalidOperation).toEqual(0);
    })
  );

});
