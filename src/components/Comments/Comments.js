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

//import CommentMessage from './CommentMessage'

const CommentTitle = styled(Text)`
    text-decoration: none;
    font-weight: bold;
 `

 const CommentBody = styled(Box)`
    background-color: grey;
 `

 const MessageInputBox = styled.textarea`
    padding: 1px;    
    margin: auto;
 `

export class Comments extends Component {

    onNameChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.changeName(fieldValue);
    }

    onLocationChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.changeLocation(fieldValue);
    }

    onMessageChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.changeMessage(fieldValue);
    }

    render() {

        return (
            <Box>
                <CommentBody my={4} p={2}>
                    <Box>
                        <Text>{this.props.commentNumberDisplay()}</Text>
                    </Box>
                    <Flex>
                        <input type="text" name="name" id="name"
                        defaultValue={this.props.defaultName}
                        onChange={this.onNameChange.bind(this)} />

                        <input type="text" name="location" id="location"
                        defaultValue={this.props.defaultLocation}
                        onChange={this.onLocationChange.bind(this)} />
                    </Flex>
                    <Box>
                        <MessageInputBox type="text" name="message" id="message" 
                        rows="4" cols="50"
                        defaultValue={this.props.defaultMessage}
                        onChange={this.onMessageChange.bind(this)} />
                    </Box>
                    <Flex>
                        <Button onClick={() => this.props.resetSubmit()}>CANCEL</Button>
                        <Button>SUBMIT</Button>
                    </Flex>
                </CommentBody>

            </Box>
        );      
    }
}

//export default Comments;
