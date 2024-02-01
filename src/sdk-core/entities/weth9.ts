import { Token } from './token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [34443]: new Token(34443, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [919]: new Token(919, '0xeb72756ee12309Eae82a0deb9787e69f5b62949c', 18, 'WETH', 'Wrapped Ether'),
};
