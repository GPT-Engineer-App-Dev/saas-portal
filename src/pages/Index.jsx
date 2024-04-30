import { Box, Flex, Text, Heading, Button, Input, Textarea, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaRocket, FaUsers, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box>
      <Flex direction="column" align="center" m={4}>
        <Heading as="h1" size="2xl" my={6}>
          GPT Engineer
        </Heading>
        <Text fontSize="xl" color={textColor}>
          Revolutionize your web development with AI-powered tools.
        </Text>
        <Button rightIcon={<FaRocket />} colorScheme="blue" mt={4} size="lg">
          Get Started
        </Button>
      </Flex>

      <Flex direction="column" align="center" bg={bgColor} p={4} m={4} borderRadius="md">
        <Heading as="h2" size="lg" my={4}>
          Features
        </Heading>
        <VStack spacing={3}>
          <Text fontSize="md" color={textColor}><FaUsers /> Collaborative Editing</Text>
          <Text fontSize="md" color={textColor}><FaRocket /> Real-Time Code Generation</Text>
          <Text fontSize="md" color={textColor}><FaEnvelope /> Instant Deployment</Text>
        </VStack>
      </Flex>

      <Flex direction="column" align="center" bg={bgColor} p={4} m={4} borderRadius="md">
        <Heading as="h2" size="lg" my={4}>
          Testimonials
        </Heading>
        <Text fontSize="md" color={textColor}>"GPT Engineer has transformed our development workflow!" - Jane Doe</Text>
        <Text fontSize="md" color={textColor}>"Incredible tool that saves us countless hours!" - John Smith</Text>
      </Flex>

      <Flex direction="column" align="center" bg={bgColor} p={4} m={4} borderRadius="md">
        <Heading as="h2" size="lg" my={4}>
          Contact Us
        </Heading>
        <VStack spacing={3}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button rightIcon={<FaEnvelope />} colorScheme="blue" mt={2}>
            Send Message
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;