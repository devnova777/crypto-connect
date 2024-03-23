import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: {
      request(args: { method: string }): Promise<{ accounts: string[] }>;
      // Add other optional Ethereum provider methods here if needed
    };
  }
}

const handleConnectWallet = async (): Promise<void> => {
  // Check if MetaMask is installed
  if (window.ethereum) {
    try {
      // Request access to the user's MetaMask accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Create a Web3 instance using MetaMask provider
      const web3 = new Web3(window.ethereum);

      // You can now use 'web3' to interact with the user's wallet
      // For example, you can fetch the user's accounts
      const accounts = await web3.eth.getAccounts();
      console.log('Connected accounts:', accounts);
    } catch (error) {
      console.error('Error connecting to MetaMask:', (error as Error).message);
    }
  } else {
    console.error('MetaMask not detected. Please install MetaMask to connect your wallet.');
  }
};

export default handleConnectWallet;
