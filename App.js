import React, { Component, useEffect, useReducer } from 'react'
import { StyleSheet } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createCause } from './src/graphql/mutations';
import { listCauses } from './src/graphql/queries';
import { onCreateTodo, onCreateCause } from './src/graphql/subscriptions';
import { AppLoading } from 'expo';
import { View, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, H1, List, ListItem, Fab } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import config from './aws-exports'
API.configure(config)             // Configure Amplify
PubSub.configure(config)

async function createNewCause() {
  const cause = { name: "Do Goodness!" , description: "Realtime and Offline"}
  await API.graphql(graphqlOperation(createCause, { input: cause }))
}

const initialState = {
  ready: false,
  causes:[]
};

const reducer = (state, action) =>{
  switch(action.type){
    case 'QUERY':
      return {...state, causes:action.causes}
    case 'SUBSCRIPTION':
      return {...state, causes:[...state.causes, action.cause]}
    case 'READY':
      return {...state, ready: true}
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getData()
    getFonts()

    const subscription = API.graphql(graphqlOperation(onCreateCause)).subscribe({
      next: (eventData) => {
        const cause = eventData.value.data.onCreateCause;
        dispatch({type:'SUBSCRIPTION', cause})
      }
    })
  
    return () => subscription.unsubscribe()
  }, [])

  async function getData() {
    const causeData = await API.graphql(graphqlOperation(listCauses))
    dispatch({type:'QUERY', causes: causeData.data.listCauses.items});
  }

  async function getFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    dispatch({type: 'READY'})
  }

  if (!state.ready) {
      return (<AppLoading />)
  }
  else return (
    <Container>
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
      <Content>
        <List>
          { state.causes.map((cause, i) => <ListItem key={cause.id}><Text>{ cause.name } : { cause.description }</Text></ListItem>) }
        </List>      
      </Content>

      <View style={{ flex: 1 }}>
        <Fab onPress={ createNewCause} title='Create Cause'>
          <Icon name="add" />
        </Fab>
      </View>
      
    </Container>
  );
}
