import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e6f9ff',
      100: '#b3ecff',
      200: '#80dfff',
      300: '#4dc3ff',
      400: '#1aa6ff',
      500: '#0077cc',
      600: '#005c99',
      700: '#004266',
      800: '#002d33',
      900: '#001a1a',
    },
    secondary: {
      50: '#f3f4f6',
      100: '#e6e9ec',
      200: '#bcc2cc',
      300: '#919ea6',
      400: '#677783',
      500: '#3c4a60',
      600: '#2e3a4a',
      700: '#1f2834',
      800: '#11171f',
      900: '#010508',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: {
      // Changing the base styles for all buttons
      baseStyle: {
        borderRadius: 'md',
        fontWeight: 'bold',
        _focus: {
          boxShadow: 'none',
        },
      },
      // Changing the size of the button variants
      sizes: {
        md: {
          fontSize: 'md',
          padding: '0.75rem 1.5rem',
        },
      },
      // Changing the colors of the button variants
      variants: {
        primary: {
          color: 'white',
          bg: 'primary.500',
          _hover: {
            bg: 'primary.600',
          },
        },
        secondary: {
          color: 'white',
          bg: 'secondary.500',
          _hover: {
            bg: 'secondary.600',
          },
        },
      },
      // Changing the default variant
      defaultProps: {
        variant: 'primary',
      },
    },
    Heading: {
      // Changing the base styles for all headings
      baseStyle: {
        fontFamily: 'heading',
      },
      // Changing the sizes of headings
      sizes: {
        md: {
          fontSize: '2xl',
        },
      },
      // Changing the default size
      defaultProps: {
        size: 'md',
      },
    },
  },
});

export default theme;
