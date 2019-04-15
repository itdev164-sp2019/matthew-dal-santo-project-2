import React, { Component } from 'react'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex
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
                <CommentBody my={4}>
                    <Text>Comment Body Test</Text>
                </CommentBody>
            </Box>
        );      
    }
}

export default Comments;