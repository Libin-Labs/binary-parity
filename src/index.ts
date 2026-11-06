export function hasOddParity(value: number): boolean {
  if (!Number.isSafeInteger(value) || value < 0)
    throw new RangeError('Expected nonnegative safe integer');
  let n = BigInt(value),
    parity = 0;
  while (n) {
    parity ^= Number(n & 1n);
    n >>= 1n;
  }
  return parity === 1;
}
