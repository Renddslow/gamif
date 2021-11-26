import { default as test } from 'ava';

import createRange from './createRange';

test('createRange - returns a list of ranges when range starts in the morning and ends in the evening', (t) => {
  t.deepEqual(createRange('1/morning', '3/evening'), [
    '1/morning',
    '1/evening',
    '2/morning',
    '2/evening',
    '3/morning',
    '3/evening',
  ]);
});

test('createRange - returns a list of ranges when range starts in the evening and ends in the evening', (t) => {
  t.deepEqual(createRange('3/evening', '5/evening'), [
    '3/evening',
    '4/morning',
    '4/evening',
    '5/morning',
    '5/evening',
  ]);
});

test('createRange - returns a list of ranges when range starts in the morning and ends in the morning', (t) => {
  t.deepEqual(createRange('3/morning', '5/morning'), [
    '3/morning',
    '3/evening',
    '4/morning',
    '4/evening',
    '5/morning',
  ]);
});

test('createRange - returns a list of ranges when range starts in the evening and ends in the morning', (t) => {
  t.deepEqual(createRange('3/evening', '6/morning'), [
    '3/evening',
    '4/morning',
    '4/evening',
    '5/morning',
    '5/evening',
    '6/morning',
  ]);
});
