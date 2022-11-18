import { render, screen } from '@testing-library/react';
import BakeryHours, { isBakeryOpen } from './bakery-hours';
import { menuData } from '../../../data/menuData.js';

it('renders learn react link', () => {
  render(<BakeryHours hours={menuData.meta.hours} />);
  const hoursElement = screen.getByText(/Hours/i);
  expect(hoursElement).toBeInTheDocument();
});

describe('isBakeryOpen', () => {
  it('returns true when the current time is between when the bakery opens and closes', () => {
    jest.useFakeTimers().setSystemTime(new Date('Fri Sep 09 2022 11:19:07 GMT-0700'));
    expect(isBakeryOpen(menuData.meta.hours)).toBe(true);
  });
  it('returns false when the current time is not between when the bakery opens and closes', () => {
    jest.useFakeTimers().setSystemTime(new Date('Fri Sep 09 2022 02:19:07 GMT-0700'));
    expect(isBakeryOpen(menuData.meta.hours)).toBe(false);
  });
  it('returns true when the current time is between when the bakery opens and closes', () => {
    jest.useFakeTimers().setSystemTime(new Date('Sat Sep 10 2022 13:19:07 GMT-0700'));
    expect(isBakeryOpen(menuData.meta.hours)).toBe(true);
  });
  it('returns false when the current time is not between when the bakery opens and closes', () => {
    jest.useFakeTimers().setSystemTime(new Date('Fri Sep 09 2022 16:19:07 GMT-0700'));
    expect(isBakeryOpen(menuData.meta.hours)).toBe(false);
  });

});
