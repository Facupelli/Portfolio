import React from 'react';
import { Box, Center, Text, Grid, GridItem, Heading, Flex } from "@chakra-ui/layout";
import { Button } from '@chakra-ui/button';


export default function Footer (){
    return (
        <Flex bg='gray.600' justify='center' mt='5%' pt='5%' pb='2%' >
            <Box>
                <Button variant='text' >Linkedin</Button>
            </Box>
            <Box>
                <Button variant='text' >Github</Button>
            </Box>
            <Box>
                <Button variant='text' >Instagram</Button>
            </Box>
        </Flex>
    )
}