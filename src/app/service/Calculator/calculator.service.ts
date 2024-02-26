import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService){

  }

  add(num1:number,num2:number){
    this.loggerService.log('Add Operation');
    return num1+num2;
  }

  subtract(num1:number,num2:number){
    this.loggerService.log('Subtract Operation');
    return num1-num2;
  }
}
