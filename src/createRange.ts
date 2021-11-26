import { Ref } from './types';

const createRange = (start: Ref, end: Ref): Ref[] => {
  const [startDay, startType] = start.split('/');
  const [endDay, endType] = end.split('/');

  const length = parseInt(endDay, 10) + 1 - parseInt(startDay, 10);
  const initialDays = Array(length)
    .fill(null)
    .map((_, idx) => idx + parseInt(startDay, 10)); // TODO better name

  const refs = [...initialDays, ...initialDays].sort().map((day, idx) => {
    return idx % 2 === 0 ? `${day}/morning` : `${day}/evening`;
  });

  if (startType !== 'morning') {
    refs.shift();
  }

  if (endType !== 'evening') {
    refs.pop();
  }

  return refs as Ref[];
};

export default createRange;
