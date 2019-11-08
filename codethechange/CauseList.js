// Default React imports
// @link https://facebook.github.io/react-native/docs/getting-started
import React, { Component } from 'react';
import { Text } from 'react-native';

// UI Imports
// @link https://docs.nativebase.io
import { List, ListItem } from 'native-base';

// AWS Amplify Imports
// @link https://aws-amplify.github.io/docs/js/start
import config from '../aws-exports'
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';

// Our GraphQL Imports.
import { listCauses } from '../src/graphql/queries'
import Cause from './Cause';


export default class CauseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      causes: [
        {
          id: 1,
          name: "One",
          description: "Thing"
        }
      ]
    }

    // Configure Amplify.
    API.configure(config);
    PubSub.configure(config);
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