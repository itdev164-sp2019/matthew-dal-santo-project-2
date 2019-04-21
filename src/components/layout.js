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

const defaultName = 'Name (required)';
const defaultLocation = 'Location (required)';
const defaultMessage = ' ';

export default class Layout extends React.Component {

  state = {
    test: 'true',
    commentSubmit: 
        {
            name: defaultName,
            location: defaultLocation,
            message: defaultMessage
        },
    comments: []
  };

  // resetSubmit() {
  //     this.setState( {
  //         name: defaultName,
  //         location: defaultLocation,
  //         message: defaultMessage
  //     })
  //     document.getElementById('name').value = defaultName; 
  //     document.getElementById('location').value = defaultLocation; 
  //     document.getElementById('message').value = defaultMessage; 
  // }

  commentNumberDisplay() {
      if (this.state.comments.length < 1) {
          return 'There are no comments on this article yet.  Be the first to comment!';
      } else {
          return 'Comments' + this.state.comments.length
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
              <Box>
                <Text>Test: {this.state.test}</Text>
                <Text>Name: {defaultName}</Text>
                <Text>State Name: {this.state.commentSubmit.name}</Text>
                <Text>State Location: {this.state.commentSubmit.location}</Text>
                <Text>State Message: {this.state.commentSubmit.message}</Text>
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
