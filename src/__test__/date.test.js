import { DateString } from '../app/utils/date/date';

describe('Testing Date Object', () => {
  const testDateOne = new Date('November 15, 2021');
  const testDateTwo = new Date('November 30, 2021');
  const dateString = DateString();

  test('November 15, 2021 is set to Monday, November 15th', () => {
    const outputString = dateString.dateToString(testDateOne);
    expect(outputString).toBe('Monday, November 15th');
  });

  test('Novebmer 30, 2021 is set to Tuesday, November 30th', () => {
    const outputString = dateString.dateToString(testDateTwo);
    expect(outputString).toBe('Tuesday, November 30th');
  });

  test('November 30th is incremented by one, so Wednesday, December 1st is returned', () => {
    testDateTwo.setDate(testDateTwo.getDate() + 1);
    const outputString = dateString.dateToString(testDateTwo);
    expect(outputString).toBe('Wednesday, December 1st');
  });
});
