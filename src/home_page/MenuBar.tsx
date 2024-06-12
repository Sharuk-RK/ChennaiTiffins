import { AspectRatio, Container, Flex } from "@mantine/core";

function MenuBar() {
  return (<>

    <Flex
        bg="white"
        gap="10"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
    >
        <Container h={1000} m={100} w={1000}>
        <AspectRatio ratio={5/8} maw={300}  pos="relative">
       
        <video style={{ border: 0, width:300}} autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" class="videobgframe" poster="https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-8811071.v2.0000000-1920w.jpg" src="src\assets\menu_video.mp4" id="videobgframe-1243667655"></video>
        </AspectRatio>
    </Container>
    </Flex>
  </>);

  }

export default MenuBar;