import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains';

type AddressMap = { [chainId: number]: string };

type ChainAddresses = {
  v3CoreFactoryAddress: string;
  multicallAddress: string;
  quoterAddress: string;
  v3MigratorAddress?: string;
  nonfungiblePositionManagerAddress?: string;
  tickLensAddress?: string;
  swapRouter02Address?: string;
  v1MixedRouteQuoterAddress?: string;
};

const DEFAULT_NETWORKS = [ChainId.BASE, ChainId.BASE_GOERLI, ChainId.SCROLL_SEPOLIA];

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const PROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xd5046B976188EB40f6DE40fB527F89c05b323385',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '',
};

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
};
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
};

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693', // Uni custom one
  quoterAddress: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
  tickLensAddress: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
  swapRouter02Address: '', // 02?
  v1MixedRouteQuoterAddress: '0xDb7971adc396d7eD3953E9542a8D4baec914B772',
};
// v3 router: 0x1B8eea9315bE495187D873DA7773a874545D9D48

// Base Goerli v3 addresses
const BASE_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xd4e13e0451D32bf846a77b7C354c7cf611290CfC',
  multicallAddress: '0xC5F0F11926d6355273cB66fCf6fB7A5CbD78f848', // Uni custom one
  quoterAddress: '0x154184eAe9de0dcac56c804Ffee021e7F2B0B2bf',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x4c656A290161CE89538e305075098FE92bDcB5E6',
  tickLensAddress: '0x4460e525CAbF58d2E8F742482A0D228641abfAF6',
  swapRouter02Address: '',
};
// v3 router: 0xdA4b92605A385CFB148450d4E89A6A4De4AE92C0

const SCROLL_SEPOLIA_ADDRESS: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '',
};
// v3 router: 0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB

const SCROLL_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
  multicallAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // Uni custom one
  quoterAddress: '0x2ee99Be3c520B7Bd64f51641c3e7Ef28950E03B7',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x396F2cA2a470EfC92511fD3e99833d28D38CFf53',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '',
};
// v3 router: 0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES,
  [ChainId.SCROLL_SEPOLIA]: SCROLL_SEPOLIA_ADDRESS,
  [ChainId.SCROLL]: SCROLL_ADDRESSES,
};

export const SUBGRAPH_URL_MAP: Record<SupportedChainsType, string> = {
  [ChainId.BASE]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-base',
  [ChainId.BASE_GOERLI]:
    'https://subgraph.satsuma-prod.com/testnet-gang--439662/v3-base-goerli/version/v0.0.1-new-version/api',
  [ChainId.SCROLL_SEPOLIA]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-scroll-sepolia',
  [ChainId.SCROLL]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-scroll',
};

export const V2_SUBGRAPH_URL_MAP: Record<SupportedChainsType, string> = {
  [ChainId.BASE]: 'https://api.thegraph.com/subgraphs/name/harleen-m/baseswap',
  [ChainId.BASE_GOERLI]:
    'https://subgraph.satsuma-prod.com/testnet-gang--439662/v2-base-goerli/version/v0.0.1-new-version/api',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v2-scroll',
};

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress;
    return memo;
  }, {}),
};

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress;
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress;
    }
    return memo;
  }, {}),
};

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress;
    return memo;
  }, {}),
};

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress;
    return memo;
  }, {}),
};

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress;
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress;
    }
    return memo;
  }, {}),
};

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'),
};

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress;
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress;
    }
    return memo;
  }, {}),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress;
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress;
  }
  return memo;
}, {});

// export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
//   if (chainId == ChainId.BNB) {
//     return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address;
//   }
//   return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
// };
