import { Box, Flex, Heading, Text, VStack, Badge, useColorModeValue } from '@chakra-ui/react';

const TokenDashboardSection = () => {
    // Mock data for token balances and recent transactions
    const tokenBalances = [
        { symbol: 'ETH', balance: '2.3456' },
        { symbol: 'BTC', balance: '0.1234' },
        { symbol: 'LINK', balance: '50.00' },
    ];

    const recentTransactions = [
        { symbol: 'ETH', amount: '+1.2345', date: '2024-03-20' },
        { symbol: 'BTC', amount: '-0.0123', date: '2024-03-19' },
        { symbol: 'LINK', amount: '+10.00', date: '2024-03-18' },
    ];

    // Define gradient colors for text
    const gradientColor = useColorModeValue(
        'linear(to-r, primary.500, secondary.500)',
        'linear(to-r, secondary.500, primary.500)'
    );

    return (
        <Box py="8" px={'4'}>
            {/* Section Heading */}
            <Heading size="lg" mb="4" textAlign="center" bgGradient={gradientColor} bgClip="text">
                Token Dashboard
            </Heading>

            {/* Token Balances and Recent Transactions */}
            <Flex direction={{ base: 'column', md: 'row' }} gap={'2'} justify="space-between" align="start">
                {/* Token Balances */}
                <Box flex="1" p="4" borderWidth="1px" borderRadius="lg" mb={{ base: '4', md: '0' }}>
                    <Heading size="md" mb="4">Token Balances</Heading>
                    <VStack spacing="2" align="start">
                        {tokenBalances.map((token, index) => (
                            <Flex key={index} justify="space-between" w="100%">
                                <Text>{token.symbol}</Text>
                                <Badge colorScheme="green">{token.balance}</Badge>
                            </Flex>
                        ))}
                    </VStack>
                </Box>

                {/* Recent Transactions */}
                <Box flex="1" p="4" borderWidth="1px" borderRadius="lg">
                    <Heading size="md" mb="4">Recent Transactions</Heading>
                    <VStack spacing="2" align="start">
                        {recentTransactions.map((transaction, index) => (
                            <Flex key={index} justify="space-between" w="100%">
                                <Text>{transaction.date}</Text>
                                <Badge colorScheme={transaction.amount.startsWith('+') ? 'green' : 'red'}>
                                    {transaction.amount}
                                </Badge>
                            </Flex>
                        ))}
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default TokenDashboardSection;
