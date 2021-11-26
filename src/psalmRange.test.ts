import { Completion } from './types';
import test from 'ava';
import psalmRange from './psalmRange';

const makeCompletion = (day: number, type: 'morning' | 'evening' | 'psalms'): Completion => ({
  day,
  type,
  read: new Date().toISOString(),
  user: 'abc',
});

const completions = [
  makeCompletion(1, 'psalms'),
  makeCompletion(2, 'psalms'),
  makeCompletion(3, 'psalms'),
  makeCompletion(4, 'psalms'),
  makeCompletion(5, 'psalms'),
  makeCompletion(6, 'psalms'),
  makeCompletion(7, 'psalms'),
];

test('psalmRange - returns true when range in completions', (t) => {
  t.true(
    psalmRange(completions, {
      type: 'in psalm range',
      args: ['2/psalms', '6/psalms'],
    }),
  );
});

test('psalmRange - returns false when range not in completions', (t) => {
  t.false(
    psalmRange(completions, {
      type: 'in psalm range',
      args: ['5/psalms', '9/psalms'],
    }),
  );
});
