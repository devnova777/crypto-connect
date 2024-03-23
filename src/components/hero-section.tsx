import { Flex, Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';

const HeroSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, primary.500, secondary.500)',
    'linear(to-r, secondary.500, primary.500)'
  );

  return (
    <Flex
      align="center"
      justify="center"
      minH="80vh"
      bgGradient={bgGradient}
      px={{ base: '6', md: '8' }}
    >
      <Box textAlign="center">
        <Heading
          as="h1"
          size="3xl"
          fontWeight="extrabold"
          color="white"
          letterSpacing="tight"
          mb="4"
        >
          Welcome to CryptoConnect
        </Heading>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          color="whiteAlpha.900"
          mb="8"
        >
          Your gateway to the decentralized world of cryptocurrencies.
        </Text>
        <Button
          size="lg"
          colorScheme="whiteAlpha"
          variant="outline"
          fontWeight="bold"
          _hover={{ bg: 'whiteAlpha.200' }}
        >
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default HeroSection;
