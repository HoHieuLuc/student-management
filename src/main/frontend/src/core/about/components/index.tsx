import { Box, Text, Title } from '@mantine/core';

const About = () => {
    return (
        <Box p ={10}>
            <Title weight={500}>About Student Management App</Title>
            <Text>
                {`I think Vue CLI is wonderful. 
                It builds the whole package for your application which saves you time 
                and also minimizes mistakes you would have made creating the structure of your application. 
                It reminds me of express cli that we used last semester in mobile development. 
                I have also seen a lot of Vue projects and they were build like these 
                which I was confused at first but makes sense now. 
                When I first started working on this project, I had a lot of difficulties, 
                thanks to the help of friends and open-source sources I was able to complete it. 
                I've also seen a lot of Vue projects and they were built like these 
                which I was confused at first but made sense now.`}
            </Text>
        </Box>
    );
};
export default About;