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
  test("Should replace all numbers with a numberal 2 with \"boop\"", ()=> {
    expect(roboRoger(2)).toEqual("0 Beep! Boop!");
  });
  test("Should replace all numbers with a numeral 3 with \"Won't you be my neighbor?\"", ()=> {
    expect (roboRoger(3)).toEqual("0 Beep! Boop! Won't you be my neighbor?");
  });
  test("Should prioritize replacing numbers with 3 over 2 over 1", ()=> { 
    expect(roboRoger(13)).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor?");
  });
  test("Should add the string \"...nice\" at the end when the number 69 is input", ()=> {
    expect(roboRoger(69)).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor? Beep! Beep! Beep! Beep! Beep! Beep! Boop! Boop! Boop! Won't you be my neighbor? Boop! Boop! Boop! Boop! Boop! Boop! Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? Won't you be my neighbor? 40 Beep! Boop! Won't you be my neighbor? 44 45 46 47 48 49 50 Beep! Boop! Won't you be my neighbor? 54 55 56 57 58 59 60 Beep! Boop! Won't you be my neighbor? 64 65 66 67 68 69 ...nice")
  });

});