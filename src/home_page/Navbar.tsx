import { useDisclosure } from '@mantine/hooks';
import { Box, Burger, Button, Container, Flex } from '@mantine/core';

function Navbar() {
  const [opened, { toggle }] = useDisclosure();
  return <>

  <Flex
      justify="flex-start"
      align="center"
      direction="row"
      gap={1670}
      wrap="wrap"
    >
      <Container m={10}>
       <Burger size="28" color='#f5640a' opened={opened} onClick={toggle} aria-label="Toggle navigation" />
       </Container>
       <Container mt={15}
       ml={10}
       mr={10}>
        <Button 
        variant="filled" 
        color='#f5640a'
        radius="lg"
        size="md"
        h={35}
        >Contact</Button>
        </Container>

  </Flex>
  </>;
}
export default Navbar;