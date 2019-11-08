// Core React
import React, { Component } from "react";
// Text UI Component
import { Text } from "react-native";
// ListItem UI Kit Component.
import { ListItem } from "native-base";

/**
 * An individual cause to be rendered in a list.
 */
export default class Cause extends Component {

  render() {
    return(
      <ListItem>      
        <Text>{ this.props.name }</Text>
      </ListItem>
    );
  }
}