// Default React imports
// @link https://facebook.github.io/react-native/docs/getting-started
import React, { Component } from 'react';
import { Text } from 'react-native';

// UI Imports
// @link https://docs.nativebase.io
import { List, ListItem } from 'native-base';

// Our GraphQL Imports.
import Cause from './Cause';


export default class CauseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      causes: [
        {
          id: 1,
          name: "YWCA",
          description: "A website to promote a new content package."
        },
        {
          id: 1,
          name: "Immigrant Services",
          description: "Verification of educational credentials."
        },
        {
          id: 1,
          name: "Mindfuel",
          description: "Effectively share impact in real time."
        },
        {
          id: 1,
          name: "Propellus",
          description: "Connecting volunteers with opportunities."
        },
      ]
    }
  }
  
  render() {
    return (
      <List>
        { 
        this.state.causes.map((cause, i) => { 
          return(
            <Cause key={i} id={cause.id} name={cause.name} description={cause.description} />
          );
        })
        }
      </List>
    );
  }
}