import { Completion, Condition } from './types';
import findIn from './in';
import inRange from './inRange';

export const calculateBadge = (completions: Completion[]) => (condition: Condition) => {
  switch (condition.type) {
    case 'in':
      return findIn(completions, condition);
    case 'in range':
      return inRange(completions, condition);
  }
};

const hasBadge = () => {};
