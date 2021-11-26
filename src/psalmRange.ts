import { Completion, Condition } from './types';
import makeRef from './makeRef';

const psalmRange = (completions: Completion[], condition: Condition) => {
  const [startDay] = condition.args[0].split('/');
  const [endDay] = condition.args[1].split('/');

  const refs = Array(parseInt(endDay, 10) + 1 - parseInt(startDay, 10))
    .fill(null)
    .map((_, idx) => `${idx + parseInt(startDay, 10)}/psalms`);

  for (const ref of refs) {
    const c = completions.find((c) => makeRef(c) === ref);
    if (!c) {
      return false;
    }
  }

  return true;
};

export default psalmRange;
