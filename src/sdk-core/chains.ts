export enum ChainId {
  BASE_GOERLI = 84531,
  BASE = 8453,
}

export const SUPPORTED_CHAINS = [ChainId.BASE, ChainId.BASE_GOERLI] as const;
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number];

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
}
