import React, { Component } from "react";
import { Text } from "react-native";

import { ListItem } from "native-base";


export default class Cause extends Component {

  render() {
    return(
      <ListItem>      
        <Text>{ this.props.name }</Text>
      </ListItem>
    );
  }
}