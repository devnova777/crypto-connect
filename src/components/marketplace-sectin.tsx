import { Box, Flex, Heading, Text, VStack, Button, Image, useColorModeValue } from '@chakra-ui/react';

const MarketplaceSection = () => {
  // Example featured items
  const featuredItems = [
    {
      id: 1,
      name: 'Digital Art #1',
      image: 'https://via.placeholder.com/600x300',
      price: '0.1 ETH',
    },
    {
      id: 2,
      name: 'NFT Collection #1',
      image: 'https://via.placeholder.com/600x300',
      price: '1 ETH',
    },
    {
      id: 3,
      name: 'CryptoPunk #1234',
      image: 'https://via.placeholder.com/600x300',
      price: '5 ETH',
    },
    {
      id: 4,
      name: 'NFT Collection #1234',
      image: 'https://via.placeholder.com/600x300',
      price: '5 ETH',
    },
  ];

  // Define gradient colors for text
  const gradientColor = useColorModeValue(
    'linear(to-r, primary.500, secondary.500)',
    'linear(to-r, secondary.500, primary.500)'
  );

  return (
    <Box py="8">
      {/* Section Heading */}
      <Heading size="lg" mb="4" textAlign="center">
        Marketplace
      </Heading>

      {/* Marketplace Content */}
      <VStack spacing="4" align="stretch">
        {/* Featured Items */}
        <Box>
          <Heading px={'4'} size="md" mb="4">Featured Items</Heading>
          <Flex wrap="wrap" justify="center">
            {featuredItems.map((item) => (
              <Box key={item.id} w="100%" maxW="400px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2">
                <Image src={item.image} alt={item.name} w="100%" h="auto" />
                <Box p="4">
                  <Text fontWeight="bold" fontSize="lg" mb="2" bgGradient={gradientColor} bgClip="text">
                    {item.name}
                  </Text>
                  <Text>{item.price}</Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Browse Items Button */}
        <Flex justify="center">
          <Button colorScheme="primary" size="lg">
            Browse All Items
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default MarketplaceSection;
