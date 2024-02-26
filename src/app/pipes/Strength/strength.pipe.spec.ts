import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe : any;
  beforeEach(()=>{
    pipe = new StrengthPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return weak when value is 5',()=>{
    expect(pipe.transform(5)).toEqual("5 (weak)")
  })

  it('should return strong when value is 15',()=>{
    expect(pipe.transform(15)).toEqual("15 (strong)")
  })

  it('should return strongest when value is 25',()=>{
    expect(pipe.transform(25)).toEqual("25 (strongest)")
  })
});
