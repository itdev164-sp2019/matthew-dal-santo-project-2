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

import CommentMessages from './CommentMessages'
import CommentSubmit from './CommentSubmit'

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

                <CommentSubmit
                defaultName={this.props.defaultName}
                defaultLocation={this.props.defaultLocation}
                defaultMessage={this.props.defaultMessage}
                submitName={this.props.submitName}
                submitLocation={this.props.submitLocation}
                submitMessage={this.props.submitMessage}
                comments={this.props.comments}
                resetSubmit={this.props.resetSubmit}
                submitComment={this.props.submitComment}
                commentNumberDisplay={this.props.commentNumberDisplay} 
                changeName={this.props.changeName}
                changeLocation={this.props.changeLocation}
                changeMessage={this.props.changeMessage} />

                <CommentMessages comments={this.props.comments}/>

            </Box>
        );      
    }
}

//export default Comments;
