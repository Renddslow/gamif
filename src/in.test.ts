import test from 'ava';
import { Completion } from './types';
import findIn from './in';

const makeCompletion = (day: number, type: 'morning' | 'evening' | 'psalms'): Completion => ({
  day,
  type,
  read: new Date().toISOString(),
  user: 'abc',
});

test('in - returns true when condition is in completions', (t) => {
  const completions: Completion[] = [
    makeCompletion(1, 'morning'),
    makeCompletion(1, 'evening'),
    makeCompletion(2, 'psalms'),
  ];

  t.true(
    findIn(completions, {
      type: 'in',
      args: ['1/evening'],
    }),
  );
});

test('in - returns false when condition is not in completions', (t) => {
  const completions: Completion[] = [
    makeCompletion(1, 'morning'),
    makeCompletion(1, 'evening'),
    makeCompletion(2, 'psalms'),
  ];

  t.false(
    findIn(completions, {
      type: 'in',
      args: ['5/evening'],
    }),
  );
});
