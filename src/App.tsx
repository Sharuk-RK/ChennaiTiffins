
import '@mantine/core/styles.css';

import { Container, Flex, MantineProvider,Text } from '@mantine/core';

import Navbar from './home_page/Navbar';
import Intro from './home_page/Intro';

function App(){
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };
  
  return (
    <>
    <MantineProvider>
      <Flex
      justify="flex-start"
      align="center"
      direction="column"
      gap={10}
      >
      <Navbar></Navbar>
      <Intro></Intro>
      </Flex>
      </MantineProvider>
    </>
  );
  
}


export default App;