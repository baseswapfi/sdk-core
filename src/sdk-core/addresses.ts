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
  [ChainId.MODE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  [ChainId.MODE_TESTNET]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
};

export const XPROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xE4750593d1fC8E74b31549212899A72162f315Fa', // xBSX
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '',
  [ChainId.MODE]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45', // xSMD
  [ChainId.MODE_TESTNET]: '0x2ee99Be3c520B7Bd64f51641c3e7Ef28950E03B7',
};

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
  [ChainId.MODE]: '0xfb926356baf861c93c3557d7327dbe8734a71891',
  [ChainId.MODE_TESTNET]: '0xa26655bab784c9bd9daadaaff2a05a93484bf9c7',
};
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
  [ChainId.MODE]: '0xc1e624c810d297fd70ef53b0e08f44fabe468591',
  [ChainId.MODE_TESTNET]: '0x9ce528e9a6bd2d489b9bbe2f97f4c8d6a23805f7',
};

const OPTIMISM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  v1MixedRouteQuoterAddress: '',
};
// v3 router: 0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693', // Uni custom one
  quoterAddress: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
  tickLensAddress: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '0x73eFdC8039B47207Cc718b7ADcB3D0dC8E76c082',
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
const ARBITRUM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x855F2c70cf5cb1D56C15ed309a4DfEfb88ED909E',
  multicallAddress: '0x3647c51266cc1610d1318edbdc1129da75db75c5', // Uni custom one
  quoterAddress: '0x3D3429862B7a4053003Ddfdb76f1b2da6aed21A1', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0x81F2c375AEDbdF02f11c1Ae125e2f51Efa777cEa',
  tickLensAddress: '0x4f881DAD698afDb3eb186f1F3fb7db15Abc0F86a',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const MODE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x6E36FC34eA123044F278d3a9F3819027B21c9c32',
  multicallAddress: '0x7bb14ed986dae0c8423350a7f1c59a31b3c84509', // Uni custom one
  quoterAddress: '0xA642c56a9bCd863E52348798b31A8Db2BCdA5aee',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0xcc3726bCc27f232bC1CaAB40853AEa91ae43C216',
  tickLensAddress: '0x62e879c8979694DbC3A4EF1dd324b08Ee3Ac3688',
  swapRouter02Address: '0x7107112065dAF2EEedD56B06cdF185f3eFFF516D',
  v1MixedRouteQuoterAddress: '', // TODO: Deploy new if needed for in-house order routing
};

const MODE_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '0x30d273e96038cc14d1eedf0aa44e77be9caaa9b2', // Uni custom one
  quoterAddress: '', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

export const CHAIN_TO_ADDRESSES_MAP: Record<number, ChainAddresses> = {
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES,
  [ChainId.SCROLL_SEPOLIA]: SCROLL_SEPOLIA_ADDRESS,
  [ChainId.SCROLL]: SCROLL_ADDRESSES,
  [ChainId.ARBITRUM]: ARBITRUM_ADDRESSES,
  [ChainId.MODE]: MODE_ADDRESSES,
  [ChainId.MODE_TESTNET]: MODE_TESTNET_ADDRESSES,
  [ChainId.OPTIMISM]: OPTIMISM_ADDRESSES,
};

export const SUBGRAPH_URL_MAP: Record<SupportedChainsType, string> = {
  // [ChainId.BASE]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-base',
  [ChainId.BASE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v3-base/prod/gn',
  [ChainId.BASE_GOERLI]:
    'https://subgraph.satsuma-prod.com/testnet-gang--439662/v3-base-goerli/version/v0.0.1-new-version/api',
  [ChainId.SCROLL_SEPOLIA]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-scroll-sepolia',
  [ChainId.SCROLL]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-scroll',
  [ChainId.ARBITRUM]: 'https://api.thegraph.com/subgraphs/name/hekman-eth/arbidex-v3',
  [ChainId.MODE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/swapmode-v3/prod/gn',
  [ChainId.OPTIMISM]: '',
};

export const V2_SUBGRAPH_URL_MAP: Record<number, string> = {
  [ChainId.BASE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v2-base/prod/gn',
  [ChainId.BASE_GOERLI]:
    'https://subgraph.satsuma-prod.com/testnet-gang--439662/v2-base-goerli/version/v0.0.1-new-version/api',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v2-scroll',
  [ChainId.ARBITRUM]: 'https://api.thegraph.com/subgraphs/name/hekman-eth/arbidex',
  [ChainId.MODE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/swapmode-v2/prod/gn',
  [ChainId.MODE_TESTNET]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/swapmode-v2-testnet/prod/gn',
};

export const NFT_POOLS_SUBGRAPH_MAP: Record<number, string> = {
  [ChainId.BASE]: '',
  [ChainId.MODE]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/nft-pools-mode/prod/gn',
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
