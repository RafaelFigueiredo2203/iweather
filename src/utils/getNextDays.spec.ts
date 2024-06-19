import { getNextDays } from "./getNextDays";

describe('Get Next Days', () => {
it('should be able to return the next five days', () => {
  const days = getNextDays()

  expect(days.length).toBe(5)
})
})