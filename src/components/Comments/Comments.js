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

import CommentMessage from './CommentMessage'

const CommentTitle = styled(Text)`
    text-decoration: none;
    font-weight: bold;
 `

 const CommentBody = styled(Box)`
    background-color: grey;
 `

const defaultName = 'Name (required)';
const defaultLocation = 'Location (required)';
const defaultMessage = ' ';

export class Comments extends Component {

    state = {
        commentSubmit: [
            {
                name: defaultName,
                location: defaultLocation,
                message: defaultMessage
            }
        ],
        comments: []
    }

    // constructor(props) {
    //     super(props);
    //     //this.resetSubmit = this.resetSubmit.bind(this);
    //     //this.changeSelectedRecipe = this.changeSelectedRecipe.bind(this);
    //     //this.toggleModal = this.toggleModal.bind(this);

    //     this.defaultName = 'Name (required)';
    //     this.defaultLocation = 'Location (required)';
    //     this.defaultMessage = ' ';

    //     this.state = {
    //         commentSubmit: [
    //             {
    //                 name: this.defaultName,
    //                 location: this.defaultLocation,
    //                 message: this.defaultMessage
    //             }
    //         ],
    //         comments: []
    //     }
    //   }
    
    //   changeSelectedRecipe(index) {
    //     this.setState({
    //       selectedRecipe: index
    //     })
    //   }
    
    //   toggleModal() {
    //     this.setState({
    //       isModal: !this.state.isModal
    //     })
    //   }
    
    resetSubmit() {
        this.setState( {
            name: defaultName,
            location: defaultLocation,
            message: defaultMessage
        })
        document.getElementById('name').value = defaultName; 
        document.getElementById('location').value = defaultLocation; 
        document.getElementById('message').value = defaultMessage; 
    }

    commentNumberDisplay() {
        if (this.state.comments.length < 1) {
            return 'There are no comments on this article yet.  Be the first to comment!';
        } else {
            return 'Comments' + this.state.comments.length
        }
    }

    render() {
        
        return (
            <Box>
                <CommentBody my={4} p={2}>
                    <Box>
                        <Text>{this.commentNumberDisplay()}</Text>
                    </Box>
                    <Flex>
                        <Image height="30px" width="30px" src="https://cdn-images-1.medium.com/max/600/1*TIbS8VWW5X4THclziAedPw.jpeg" />

                        <input defaultValue={defaultName} type="text" name="name" id="name"
                        value={this.state.commentSubmit.name}
                        onChange={e => this.setState({ name: e.target.value })} />

                        <input defaultValue={defaultLocation} type="text" name="location" id="location"
                        value={this.state.commentSubmit.location}
                        onChange={e => this.setState({ location: e.target.value })} />
                    </Flex>
                    <Box>
                        <input defaultValue={defaultMessage} type="text" name="message" id="message" autoComplete="off"
                        value={this.state.commentSubmit.message}
                        onChange={e => this.setState({ message: e.target.value })} />
                    </Box>
                    <Flex>
                        <Button onClick={() => this.resetSubmit()}>CANCEL</Button>
                        <Button>SUBMIT</Button>
                    </Flex>
                    <Box>
                        <Text>Test</Text>
                        <Text>Default Name: {this.defaultName}</Text>
                        <Text>State Name: {this.state.commentSubmit.name}</Text>
                        <Text>State Location: {this.state.commentSubmit.location}</Text>
                        <Text>State Message: {this.state.commentSubmit.message}</Text>
                    </Box>
                </CommentBody>

                <CommentMessage />

            </Box>
        );      
    }
}
