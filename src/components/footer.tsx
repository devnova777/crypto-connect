import { Box, Flex, Text, Link, Divider, VStack, Heading } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py="4" mt="auto">
      <Divider mb="4" />
      <VStack spacing={{ base: '4', md: '8' }} align="start">
        {/* Social Links Section */}
        <Box>
          <Heading size="sm" mb="2">Follow Us</Heading>
          <Flex flexWrap="wrap">
            <Link mx="2" mb="2" href="#" color="blue.500">
              Twitter
            </Link>
            <Link mx="2" mb="2" href="#" color="blue.500">
              LinkedIn
            </Link>
            <Link mx="2" mb="2" href="#" color="blue.500">
              Facebook
            </Link>
          </Flex>
        </Box>

        {/* Services Section */}
        <Box>
          <Heading size="sm" mb="2">Services</Heading>
          <Flex flexWrap="wrap">
            <Link mx="2" mb="2" href="#" color="blue.500">
              About Us
            </Link>
            <Link mx="2" mb="2" href="#" color="blue.500">
              Blog
            </Link>
            <Link mx="2" mb="2" href="#" color="blue.500">
              Careers
            </Link>
          </Flex>
        </Box>

        {/* Legal Section */}
        <Box>
          <Heading size="sm" mb="2">Legal</Heading>
          <Flex flexWrap="wrap">
            <Link mx="2" mb="2" href="#" color="blue.500">
              Terms of Service
            </Link>
            <Link mx="2" mb="2" href="#" color="blue.500">
              Privacy Policy
            </Link>
            <Link mx="2" mb="2" href="#" color="blue.500">
              Cookie Policy
            </Link>
          </Flex>
        </Box>

        {/* Contact Section */}
        <Box>
          <Heading size="sm" mb="2">Contact Us</Heading>
          <Text mb="2">Email: contact@example.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Footer;
