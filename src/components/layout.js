import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import { Light as lightTheme } from '../themes/Light'
import { Dark as darkTheme } from '../themes/Dark'
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex,
  Button
} from 'rebass'

import Header from "./header"
import "./layout.css"

import {Comments} from "./Comments"

const defaultName = 'Name (required)';
const defaultLocation = 'Location (required)';
const defaultMessage = 'Enter your comment here...';

export default class Layout extends React.Component {

  resetSubmit = this.resetSubmit.bind(this);
  submitComment = this.submitComment.bind(this);
  commentNumberDisplay = this.commentNumberDisplay.bind(this);
  changeName = this.changeName.bind(this);
  changeLocation = this.changeLocation.bind(this);
  changeMessage = this.changeMessage.bind(this);

  state = {
    test: 'true',
    submitName: defaultName,
    submitLocation: defaultLocation,
    submitMessage: defaultMessage,
    comments: []
  };

  changeName(inputName) {
    this.setState({
        submitName: inputName
    }) 
  }

  changeLocation(inputLocation) {
    this.setState({
      submitLocation: inputLocation
    })
  }

  changeMessage(inputMessage) {
    this.setState({
        submitMessage: inputMessage
    })
  }

  resetSubmit() {
      this.setState({
        submitName: defaultName,
        submitLocation: defaultLocation,
        submitMessage: defaultMessage
      })
      document.getElementById('name').value = defaultName; 
      document.getElementById('location').value = defaultLocation; 
      document.getElementById('message').value = defaultMessage; 
  }

  submitComment() {
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

  commentNumberDisplay() {
      if (this.state.comments.length < 1) {
          return 'There are no comments on this article yet.  Be the first to comment!';
      } else {
          return 'Comments  ' + this.state.comments.length
      }
  }

  render() {

    const { children } = this.props;

    return(
      <ThemeProvider theme={lightTheme}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <div>
              <main>{children}</main>

              <Comments 
              defaultName={defaultName}
              defaultLocation={defaultLocation}
              defaultMessage={defaultMessage}
              submitName={this.state.submitName}
              submitLocation={this.state.submitLocation}
              submitMessage={this.state.submitMessage}
              comments={this.state.comments}
              resetSubmit={this.resetSubmit}
              submitComment={this.submitComment}
              commentNumberDisplay={this.commentNumberDisplay} 
              changeName={this.changeName}
              changeLocation={this.changeLocation}
              changeMessage={this.changeMessage} />

              <Box mx={2}>
                <Text>Test: {this.state.test}</Text>
                <Text>Name: {defaultName}</Text>
                <Text>State Name: {this.state.submitName}</Text>
                <Text>State Location: {this.state.submitLocation}</Text>
                <Text>State Message: {this.state.submitMessage}</Text>
              </Box>

              <Box mt={2}>
                <Text>Comments:</Text>
                {this.state.comments.map(comments =>
                <Box mx={4} my={2}>
                  <Text>{comments.name}</Text>
                  <Text>{comments.location}</Text>
                  <Text>{comments.message}</Text>
                </Box>
                )}
              </Box>
            </div>
          )}
        />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

//export default Layout
