import React, { Component } from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Button
  } from 'rebass'
import styled from 'styled-components'



const CommentTitle = styled(Text)`
    text-decoration: none;
    font-weight: bold;
 `

 const CommentBody = styled(Box)`
    background-color: grey;
 `

export class CommentMessage extends Component {
    render() {
        return (
            <Box>
                <CommentBody mb={4} p={2}>
                    <Flex>
                        <Box>
                            <Image height="30px" width="30px" src="https://cdn-images-1.medium.com/max/600/1*TIbS8VWW5X4THclziAedPw.jpeg"/>
                        </Box>
                        <Box>
                            <Text>Name</Text>
                            <Text>Location</Text>
                        </Box>
                    </Flex>
                    <Box pl={4}>
                        <Text>Comment Text</Text>
                    </Box>
                </CommentBody>
            </Box>
        );      
    }
}

export default CommentMessage;