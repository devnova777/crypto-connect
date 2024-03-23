import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Flex,
    Box,
    Image,
    Button,
    Spacer,
    useColorMode,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { connectWalletSuccess, connectWalletFailure } from '../features/walletSlice'; // Importing the Redux actions
import Web3 from 'web3';

import { useAppSelector } from '../app/store';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const dispatch = useDispatch(); // Get dispatch function from Redux
    const { accounts, connected } = useAppSelector((state) => state.wallet);

    const handleConnectWallet = async () => {
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
                dispatch(connectWalletSuccess(accounts));
                console.log('Connected accounts:', accounts);
            } catch (error) {
                dispatch(connectWalletFailure((error as Error).message));
                console.error('Error connecting to MetaMask:', (error as Error).message);
            }
        } else {
            console.error('MetaMask not detected. Please install MetaMask to connect your wallet.');
        }
    };

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="1rem"
            borderBottom="1px solid"
            borderColor="gray.200"
        >
            <Image src={'/icon.jpg'} alt="CryptoConnect Icon" boxSize="48px" mr="4" />
            <Spacer />
            <Box>
                <Button mr="2" onClick={handleConnectWallet}>Connect Wallet {connected} {accounts}</Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                </Button>
            </Box>
        </Flex>
    );
};

export default Navbar;
