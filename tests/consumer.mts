import * as api from '@lp-labs/binary-parity';
import { hasOddParity } from '@lp-labs/binary-parity';
console.log(hasOddParity(7));
// @ts-expect-error invalid argument must be rejected by declarations
api.hasOddParity('1');
