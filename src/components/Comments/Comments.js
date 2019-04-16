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
//import { Edit } from 'styled-icons/feather'
  
const CommentTitle = styled(Text)`
    text-decoration: none;
    font-weight: bold;
 `

 const CommentBody = styled(Box)`
    background-color: grey;
 `

export class Comments extends Component {
    render() {
        return (
            <Box>
                <CommentBody my={4} p={1}>
                    <Box>
                        <Text>Comments (Number)</Text>
                    </Box>
                    <Flex>
                        <Image height="30px" width="30px" src="https://cdn-images-1.medium.com/max/600/1*TIbS8VWW5X4THclziAedPw.jpeg"/>
                        <input defaultValue="Name (required)" type="" name="name" />
                        <input defaultValue="Location (required)" type="" name="location" />
                    </Flex>
                    <Box>
                        <input type="text" name="name" />
                    </Box>
                    <Flex>
                        <Button>CANCEL</Button>
                        <Button>SUBMIT</Button>
                    </Flex>
                </CommentBody>
                <CommentBody mb={4}>
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
