export enum ChainId {
  ARBITRUM = 42161,
  BASE_GOERLI = 84531,
  BASE = 8453,
  OPTIMISM = 10,
  SCROLL = 534352,
  SCROLL_SEPOLIA = 534351,
}

export const SUPPORTED_CHAINS = [
  ChainId.BASE,
  ChainId.BASE_GOERLI,
  ChainId.SCROLL_SEPOLIA,
  ChainId.SCROLL,
  ChainId.ARBITRUM,
] as const;
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number];

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
}
