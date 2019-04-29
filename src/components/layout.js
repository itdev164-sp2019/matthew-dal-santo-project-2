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

//import Header from "./header"
import "./layout.css"

import {Comments} from "./Comments"

export default class Layout extends React.Component {

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
            <Box>

              <main>{children}</main>

              <Comments />

            </Box>
          )}
        />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
