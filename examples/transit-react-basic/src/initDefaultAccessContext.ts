import { initDefaultAccessContext } from 'eos-transit';
import scatter from 'eos-transit-scatter-provider';
import ledger from 'eos-transit-ledger-provider';
import eostock from 'eos-transit-eostock-provider';

const appName = 'my_eos_dapp';

const walContext = initDefaultAccessContext({
	appName,
	network: {
		host: 'api.pennstation.eosnewyork.io',
		port: 7101,
		protocol: 'https',
		chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
	},
	// walletProviders: [ scatter() ]
	walletProviders: [ scatter(), ledger(), eostock() ]
});

// walContext.addWalletProvider(ledger({ pathIndexList: [ 0, 1, 2, 35 ] }));
