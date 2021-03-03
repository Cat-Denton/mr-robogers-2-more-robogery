import { TestScheduler } from 'jest';
import roboRoger from './../src/js/roboRoger.js';

describe('roboRoger', () => {
  test('Should output an error if the input is >100', ()=> {
    expect(roboRoger(102)).toEqual("Mr. roboRogers doesn't have all day! Input a smaller number so they don't get angry!");
  });

  test("Should output \"0\" if the input is 0", ()=> {
    expect(roboRoger(0)).toEqual("0");
  });
});