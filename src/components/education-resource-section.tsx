import { Box, Heading, Text, VStack, Link, useColorModeValue } from '@chakra-ui/react';

const EducationalResourcesSection = () => {
    // Example featured articles
    const featuredArticles = [
        {
            id: 1,
            title: 'Introduction to Blockchain Technology',
            description: 'Learn the basics of blockchain technology and its applications.',
            link: 'https://example.com/article1',
        },
        {
            id: 2,
            title: 'Understanding Decentralized Finance (DeFi)',
            description: 'Explore the world of decentralized finance and its impact on traditional finance.',
            link: 'https://example.com/article2',
        },
    ];

    // Define gradient colors for heading text
    const gradientColor = useColorModeValue(
        'linear(to-r, primary.500, secondary.500)',
        'linear(to-r, secondary.500, primary.500)'
    );

    return (
        <Box py="8" px={'4'}>
            {/* Section Heading with Gradient Text */}
            <Heading size="lg" mb="4" textAlign="center" bgGradient={gradientColor} bgClip="text">
                Educational Resources
            </Heading>

            {/* Resource Content */}
            <VStack spacing="8" align="stretch">
                {/* Featured Articles */}
                <Box>
                    <Heading size="md" mb="4">Featured Articles</Heading>
                    {featuredArticles.map((article) => (
                        <Box key={article.id} p="4" borderWidth="1px" mb={'2'} borderRadius="lg">
                            <Heading size="md" mb="2">{article.title}</Heading>
                            <Text>{article.description}</Text>
                            <Link href={article.link} color="blue.500" mt="2" isExternal>
                                Read Article
                            </Link>
                        </Box>
                    ))}
                </Box>

                {/* Webinars (Example) */}
                <Box>
                    <Heading size="md" mb="4">Webinars</Heading>
                    <Text>No webinars currently available.</Text>
                </Box>

                {/* Community Forums (Example) */}
                <Box>
                    <Heading size="md" mb="4">Community Forums</Heading>
                    <Text>
                        Join our community forums to engage with other users, ask questions, and share knowledge.
                    </Text>
                    <Link href="#" color="blue.500" mt="2" isExternal>
                        Visit Forums
                    </Link>
                </Box>
            </VStack>
        </Box>
    );
};

export default EducationalResourcesSection;
