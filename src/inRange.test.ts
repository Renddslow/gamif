import test from 'ava';

import inRange from './inRange';
import { Completion } from './types';

const makeCompletion = (day: number, type: 'morning' | 'evening' | 'psalms'): Completion => ({
  day,
  type,
  read: new Date().toISOString(),
  user: 'abc',
});

const completions = [
  makeCompletion(1, 'morning'),
  makeCompletion(1, 'evening'),
  makeCompletion(2, 'morning'),
  makeCompletion(2, 'evening'),
  makeCompletion(3, 'morning'),
  makeCompletion(3, 'evening'),
  makeCompletion(4, 'morning'),
  makeCompletion(4, 'evening'),
  makeCompletion(5, 'morning'),
  makeCompletion(5, 'evening'),
  makeCompletion(6, 'morning'),
  makeCompletion(6, 'evening'),
  makeCompletion(7, 'morning'),
  makeCompletion(7, 'evening'),
];

test('inRange - returns true when range [m, ..., e] in completions', (t) => {
  t.true(
    inRange(completions, {
      type: 'in range',
      args: ['1/morning', '4/evening'],
    }),
  );
});

test('inRange - returns true when range [e, ..., e] in completions', (t) => {
  t.true(
    inRange(completions, {
      type: 'in range',
      args: ['1/evening', '4/evening'],
    }),
  );
});

test('inRange - returns true when range [e, ..., m] in completions', (t) => {
  t.true(
    inRange(completions, {
      type: 'in range',
      args: ['1/evening', '6/morning'],
    }),
  );
});

test('inRange - returns true when range [m, ..., m] in completions', (t) => {
  t.true(
    inRange(completions, {
      type: 'in range',
      args: ['1/morning', '7/morning'],
    }),
  );
});

test('inRange - returns false when range [m, ..., e] not in completions', (t) => {
  t.false(
    inRange(completions, {
      type: 'in range',
      args: ['3/morning', '10/evening'],
    }),
  );
});

test('inRange - returns false when range [e, ..., e] not in completions', (t) => {
  t.false(
    inRange(completions, {
      type: 'in range',
      args: ['8/evening', '10/evening'],
    }),
  );
});

test('inRange - returns false when range [e, ..., m] not in completions', (t) => {
  t.false(
    inRange(completions, {
      type: 'in range',
      args: ['1/evening', '9/morning'],
    }),
  );
});

test('inRange - returns false when range [m, ..., m] not in completions', (t) => {
  t.false(
    inRange(completions, {
      type: 'in range',
      args: ['11/morning', '17/morning'],
    }),
  );
});
