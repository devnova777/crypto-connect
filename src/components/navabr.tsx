import {
    Flex,
    Box,
    Heading,
    Button,
    Spacer,
    useColorMode,
    useTheme
} from '@chakra-ui/react';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();

    const gradient = `linear-gradient(to-br, ${theme.colors.primary['500']}, ${theme.colors.secondary['500']})`;

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="1rem"
            borderBottom="1px solid"
            borderColor="gray.200"
        >
            <Flex align="center">
                <Heading
                    as="h1"
                    size="md"
                    bgGradient={gradient}
                    bgClip="text"
                    fontWeight="bold"
                    lineHeight="1"
                    letterSpacing="wide"
                >
                    CryptoConnect
                </Heading>
            </Flex>
            <Spacer />
            <Box>
                <Button mr="2">Connect Wallet</Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
            </Box>
        </Flex>
    );
};

export default Navbar;
