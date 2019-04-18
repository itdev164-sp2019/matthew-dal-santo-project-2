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

import CommentSubmit from './CommentSubmit'
import CommentMessage from './CommentMessage'

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
                
                <CommentSubmit />

                <CommentMessage />

            </Box>
        );      
    }
}
