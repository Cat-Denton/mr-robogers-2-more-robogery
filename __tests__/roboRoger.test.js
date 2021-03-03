import { TestScheduler } from 'jest';
import roboRoger from './../src/js/roboRoger.js';

describe('roboRoger', () => {
  test('Should output an error if the input is >100', ()=> {
    expect(roboRoger(102)).toEqual("Mr. roboRogers doesn't have all day! Input a smaller number so they don't get angry!");
  });

  test("Should output a string if a number is input", ()=> {
    expect(roboRoger(0)).toEqual("0");
  });

  test("Should replace all numbers with a numeral 1 with \"beep\"", ()=> {
    expect(roboRoger(1)).toEqual("0 Beep!");
  });
});