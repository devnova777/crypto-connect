import {
  Flex,
  Box,
  Heading,
  Button,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';

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
      <Flex align="center">
        <Heading as="h1" size="md" mr="4">
          Your Web3 App
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
