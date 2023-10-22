import { Token } from './token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [534352]: new Token(534352, '0x5300000000000000000000000000000000000004', 18, 'WETH', 'Wrapped Ether'),
  [534351]: new Token(534351, '0x5300000000000000000000000000000000000004', 18, 'WETH', 'Wrapped Ether'),
};
