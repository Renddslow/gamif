import { Completion, Condition } from './types';
import findIn from './in';
import inRange from './inRange';
import psalmRange from './psalmRange';

const calculateBadge = (completions: Completion[]) => (condition: Condition) => {
  switch (condition.type) {
    case 'in':
      return findIn(completions, condition);
    case 'in range':
      return inRange(completions, condition);
    case 'in psalm range':
      return psalmRange(completions, condition);
    case 'perfect in range':
      return false;
  }
};

export default calculateBadge;
