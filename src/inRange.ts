import { Completion, Condition } from './types';
import createRange from './createRange';
import makeRef from './makeRef';

const inRange = (completions: Completion[], condition: Condition) => {
  const [a, b] = condition.args;
  const refs = createRange(a, b);

  for (const ref of refs) {
    const c = completions.find((c) => makeRef(c) === ref);
    if (!c) {
      return false;
    }
  }

  return true;
};

export default inRange;
