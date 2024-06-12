import { AspectRatio, Text, Flex, Image, Overlay, Box, Container, Divider } from '@mantine/core';
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiCheersDuotone } from "react-icons/pi";
import MenuBar from './MenuBar';

function Intro() {
  return (
    <>
    {/* <Image
      radius="md"
      h={1800}
      w={1800}
      fit="contain"
      src="src\assets\indian res table convo.jpg"
    ></Image> */}
    <AspectRatio ratio={16 / 9} maw={1800} mx="auto" pos="relative">
       
    <video style={{ border: 0, width:1800}} autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" class="videobgframe" poster="https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-8811071.v2.0000000-1920w.jpg" src="src\assets\intro_video.mp4" id="videobgframe-1243667655"></video>
      <Overlay center color="#000" backgroundOpacity={0.4} blur={0} children={
      <Image
      h={300}
      w={300}
      fit="contain"
      src="src\assets\logo3.png"
    ></Image>}/>
    </AspectRatio>

    <Flex
      bg="white"
      gap="10"
      justify="flex-start"
      align="flex-startr"
      direction="row"
      wrap="wrap"
    >
    
    <Flex
      mih={50}
      bg="white"
      gap="80"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <FaClock color='#f5640a' size={40}/>
  
    <Flex
    mih={5}
    bg="white"
    gap="10"
    justify="center"
    align="center"
    direction="column"
    wrap="wrap"
    >
    <Flex
      mih={50}
      bg="white"
      gap="75"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      
      <Box w={100} component="div">
        <Text ta="left" fw={700} c={"#f5640a"} >Sunday</Text>
      </Box>
      
    <Flex
    mih={5}
    bg="white"
    gap="1"
    justify="flex-start"
    align="flex-start"
    direction="column"
    wrap="wrap"
    >
      <Box w={300} component="div">
      <Text ta="right" fw={700} c={"#f5640a"} >11:00 am - 3:00 pm</Text>
      <Text ta="right" fw={700} c={"#f5640a"} >5:00 pm - 8:30 pm</Text>
      </Box>
    </Flex>
    </Flex>

    <Flex
      mih={50}
      bg="white"
      gap="75"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Box w={100} component="div">
      <Text ta="left" fw={700} c={"#f5640a"} >Monday</Text>
      </Box>
    <Flex
    mih={5}
    bg="white"
    gap="1"
    justify="center"
    align="center"
    direction="column"
    wrap="wrap"
    >
      <Box w={300} component="div">
      <Text ta="right" fw={700} c={"#f5640a"} >5:00 pm - 9:30 pm</Text>
      </Box>
    </Flex>
    </Flex>


    <Flex
      mih={50}
      bg="white"
      gap="75"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Box w={100} component="div">
      <Text ta="left" fw={700} c={"#f5640a"} >Tue - Thu</Text>
      </Box>
    <Flex
    mih={5}
    bg="white"
    gap="1"
    justify="flex-start"
    align="flex-start"
    direction="column"
    wrap="wrap"
    >
      <Box w={300} component="div">
      <Text ta="right" fw={700} c={"#f5640a"} >11:00 am - 2:30 pm</Text>
      <Text ta="right" fw={700} c={"#f5640a"} >5:00 pm - 9:30 pm</Text>
      </Box>
    </Flex>
    </Flex>


<Flex
      mih={50}
      bg="white"
      gap="75"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Box w={100} component="div">
      <Text ta="left" fw={700} c={"#f5640a"} >Friday</Text>
      </Box>
    <Flex
    mih={5}
    bg="white"
    gap="1"
    justify="flex-start"
    align="flex-start"
    direction="column"
    wrap="wrap"
    >
      <Box w={300} component="div">
      <Text ta="right" fw={700} c={"#f5640a"} >11:00 am - 3:00 pm</Text>
      <Text ta="right" fw={700} c={"#f5640a"} >5:00 pm - 11:30 pm</Text>
      </Box>
    </Flex>
    </Flex>



    <Flex
      mih={50}
      bg="white"
      gap="75"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Box w={100} component="div">
      <Text ta="left" fw={700} c={"#f5640a"} >Saturday</Text>
      </Box>
    <Flex
    mih={5}
    bg="white"  
    gap="1"
    justify="flex-start"
    align="flex-start"
    direction="column"
    wrap="wrap"
    >
      <Box w={300} component="div">
      <Text ta="right" fw={700} c={"#f5640a"} >11:00 am - 3:00 pm</Text>
      <Text ta="right" fw={700} c={"#f5640a"} >5:30 pm - 11:30 pm</Text>
      </Box>
    </Flex>
    </Flex>
    
    
    </Flex>

    
     
    </Flex>
    <Divider orientation="vertical" />
    <Flex
    mih={5}
    bg="white"  
    gap="20"
    justify="flex-start"
    align="flex-start"
    direction="row"
    wrap="wrap"
    >
      <Container>
        <IoLocationOutline size={40} />
      </Container>

      <Container w={450}>
      <Text fw={700}>359 Old River Rd,</Text>
      <Text fw={700}>Manville,</Text>
      <Text fw={700}>RI 02838</Text>
      </Container>
    </Flex>
    <Divider orientation="vertical" />

    <Flex
    mih={5}
    bg="white"  
    gap="20"
    justify="flex-start"
    align="flex-start"
    direction="row"
    wrap="wrap"
    >
      <Container ml={15} mt={5}>
      <PiCheersDuotone size={40} />
      </Container>

      <Container w={450}>
      <Text fw={700}>(401) 356-4471</Text>
      <Text fw={700}>chennaitiffins3@gmail.com</Text>
      </Container>
    </Flex>
    
    </Flex>
    
    <MenuBar></MenuBar>
    </>
  );
}

export default Intro;