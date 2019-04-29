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
            <Box>
                <Box>
                    <CommentTitle my={2}>Comments</CommentTitle>
                </Box>
                {this.props.comments.map(comments =>
                  <Box my={2} bg='lightGrey'>
                    <Text px={1}>Name: {comments.name}</Text>
                    <Text px={1}>Location: {comments.location}</Text>
                    <Text px={1}>Message: {comments.message}</Text>
                  </Box>
                )}
            </Box>
        );      
    }
}

export default CommentMessages;
