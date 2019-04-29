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
    padding-top: 20px;
    padding-bottom: 20px;
 `

const defaultName = 'Name (required)';
const defaultLocation = 'Location (required)';
const defaultMessage = 'Enter your comment here...';

export class Comments extends Component {

    resetSubmit = this.resetSubmit.bind(this);
    submitComment = this.submitComment.bind(this);
    commentNumberDisplay = this.commentNumberDisplay.bind(this);
    changeName = this.changeName.bind(this);
    changeLocation = this.changeLocation.bind(this);
    changeMessage = this.changeMessage.bind(this);

    state = {
        submitName: null,
        submitLocation: null,
        submitMessage: null,
        submitButtonDisabled: true,
        comments: []
    };
    
    changeName(inputName) {
        if (!!inputName && !!this.state.submitLocation && !!this.state.submitMessage) {
            this.setState({
                submitName: inputName,
                submitButtonDisabled: false
            })
        } else {
            this.setState({
                submitName: inputName,
                submitButtonDisabled: true
            })
        }
    }
    
    changeLocation(inputLocation) {
        if (!!this.state.submitName && !!inputLocation && !!this.state.submitMessage) {
            this.setState({
                submitLocation: inputLocation,
                submitButtonDisabled: false
            })
        } else {
            this.setState({
                submitLocation: inputLocation,
                submitButtonDisabled: true
            })
        }
    }
    
    changeMessage(inputMessage) {
        if (!!this.state.submitName && !!this.state.submitLocation && !!inputMessage) {
            this.setState({
                submitMessage: inputMessage,
                submitButtonDisabled: false
            })
        } else {
            this.setState({
                submitMessage: inputMessage,
                submitButtonDisabled: true
            })
        }
    }
    
    resetSubmit() {
        this.setState({
            submitName: null,
            submitLocation: null,
            submitMessage: null,
            submitButtonDisabled: true
        })
        document.getElementById('name').value = null; 
        document.getElementById('location').value = null; 
        document.getElementById('message').value = null; 
    }
    
    submitComment() {
        if (!!this.state.submitName && !!this.state.submitLocation && !!this.state.submitMessage) {
            var updatedComments = this.state.comments;
            var comment = {
                key: this.state.comments.length + 1,
                name: this.state.submitName, 
                location: this.state.submitLocation, 
                message: this.state.submitMessage
            };
            console.log(comment);
            updatedComments.push(comment);
            this.setState({
                comments: updatedComments
            })
        
            this.resetSubmit();
        }
    }
  
    commentNumberDisplay() {
        if (this.state.comments.length < 1) {
            return 'There are no comments on this article yet.  Be the first to comment!';
        } else {
            return 'Comments  ' + this.state.comments.length
        }
    }

    onNameChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.changeName(fieldValue);
    }

    onLocationChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.changeLocation(fieldValue);
    }

    onMessageChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.changeMessage(fieldValue);
    }

    render() {

        return (
            <CommentBody mx={5}>

                <CommentSubmit
                defaultName={defaultName}
                defaultLocation={defaultLocation}
                defaultMessage={defaultMessage}
                submitName={this.state.submitName}
                submitLocation={this.state.submitLocation}
                submitMessage={this.state.submitMessage}
                submitButtonDisabled={this.state.submitButtonDisabled}
                comments={this.state.comments}
                resetSubmit={this.resetSubmit}
                submitComment={this.submitComment}
                commentNumberDisplay={this.commentNumberDisplay} 
                changeName={this.changeName}
                changeLocation={this.changeLocation}
                changeMessage={this.changeMessage} />

                <CommentMessages comments={this.state.comments}/>

            </CommentBody>
        );      
    }
}
