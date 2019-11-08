// Default React imports
// @link https://facebook.github.io/react-native/docs/getting-started
import React, { Component } from 'react';

// UI Imports
// @link https://docs.nativebase.io
import { List, ListItem } from 'native-base';

// Children components.
import Cause from './Cause';

/**
 * A list of causes that populate the listview for the app.
 */
export default class CauseList extends Component {

  /**
   * The component constructor.
   * 
   * Sets the initial state for the causes array to populate the list.
   * 
   * @param {*} props 
   */
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
  
  /**
   * Renders the cause list.
   */
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