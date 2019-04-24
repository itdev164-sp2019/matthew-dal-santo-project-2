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

export class CommentMessages extends Component {
    render() {
        return (
            <Box mt={2}>
                <Text>Comments:</Text>
                {this.props.comments.map(comments =>
                <Box mx={4} my={2}>
                  <Text>{comments.name}</Text>
                  <Text>{comments.location}</Text>
                  <Text>{comments.message}</Text>
                </Box>
                )}
              </Box>
        );      
    }
}

export default CommentMessages;
