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

 const SubmitBody = styled(Box)`
    background-color: lightgrey;
    padding: 30px;
`

const CommentNumber = styled(Text)`
    text-decoration: none;
    font-weight: bold;
`

const SubmitImage = styled(Image)`
    vertical-align: middle;
    width: 40px;
    height: 40px;
`

const NameInput = styled.input`
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
 `

const LocationInput = styled.input`
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
`

 const MessageInputBox = styled.textarea`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;   
    margin: auto;
    min-height: 200px;
    width: 100%;
 `

export class CommentSubmit extends Component {

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
                <SubmitBody>

                    <Flex>
                        <Box>
                            <CommentNumber>{this.props.commentNumberDisplay()}</CommentNumber>
                        </Box>
                    </Flex>

                    <Flex my={2} alignItems='center'>
                        <Box mr={"10px"} >
                            <SubmitImage src="https://pm1.narvii.com/6911/ca42a1ec5c1bf2d9251960a08b9cb2d965654123r1-1400-828v2_128.jpg" />
                        </Box>

                        <NameInput id="name"
                        autoComplete="off"
                        name="name" 
                        type="text"
                        placeholder={this.props.defaultName}
                        onChange={this.onNameChange.bind(this)} />

                        <LocationInput id="location"
                        autoComplete="off"
                        name="location"
                        type="text" 
                        placeholder={this.props.defaultLocation}
                        onChange={this.onLocationChange.bind(this)} />
                    </Flex>

                    <Flex my={2}>
                        <MessageInputBox id="message"
                        name="message"
                        type="text" 
                        placeholder={this.props.defaultMessage}
                        onChange={this.onMessageChange.bind(this)} />
                    </Flex>

                    <Flex my={2}>
                        <Button id="cancelComment"
                        mx={2}
                        onClick={() => this.props.resetSubmit()}>
                            CANCEL
                        </Button>
                        <Button  id="submitComment"
                        disabled={this.props.submitButtonDisabled}
                        bg={this.props.submitButtonDisabled ? 'grey' : 'blue'}
                        mx={2}
                        onClick={() => this.props.submitComment()}>
                            SUBMIT
                        </Button>
                    </Flex>

                </SubmitBody>
            </Box>
        );      
    }
}

export default CommentSubmit;
