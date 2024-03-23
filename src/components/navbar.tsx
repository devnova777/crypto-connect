import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Flex,
    Box,
    Image,
    Button,
    Spacer,
    useColorMode,
} from '@chakra-ui/react';
import handleConnectWallet from '../ilb/connect-wallet';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

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
                <Button mr="2" onClick={handleConnectWallet}>Connect Wallet</Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                </Button>
            </Box>
        </Flex>
    );
};

export default Navbar;
