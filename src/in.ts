import { Completion, Condition } from './types';

import makeRef from './makeRef';

const findIn = (completions: Completion[], condition: Condition): boolean => {
  const found = completions.find((c) => makeRef(c) === condition.args[0]);
  return !!found;
};

export default findIn;
