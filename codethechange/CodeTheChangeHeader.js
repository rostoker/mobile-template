import React, { Component } from 'react';
import { Header, Left, Button, Body, Title, Icon, Right } from 'native-base';

export default class CodeTheChangeHeader extends Component {

  render() {
    return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Code The Change</Title>
      </Body>
      <Right />
    </Header>
    );
  }
}