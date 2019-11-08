// React is the javascript core that powers the app.
//  - React Native is based on this core component architecture.
//  - @link https://reactjs.org/docs/getting-started.html
import React from 'react';

// A simple loading screen & font loading library from expo.
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// Native base is the UI Kit that this sample uses, it contains many
// simple components that mean you don't need to mess around with style.
//  - @link https://docs.nativebase.io/
import { Container, Content } from 'native-base';

// Ionicons help flesh out the icons for the project, you can find the full list
//  - @link https://ionicons.com/
import { Ionicons } from '@expo/vector-icons';

// Now we get into the custom components for this project.
// You can find these in the ./codethechange folder.
import CauseList from './codethechange/CauseList';
import CodeTheChangeHeader from './codethechange/CodeTheChangeHeader'

/**
 * The main application.
 * 
 * This is the starting place for the application, it should be kept relatively simple
 * given that it's the most 'global' component of the app.
 */
export default class App extends React.Component {
  /**
   * Constructs the App class.
   * 
   * Sets the default state.
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  /**
   * A lifecycle hook for when the component has mounted into the UI.
   * 
   * @link https://reactjs.org/docs/react-component.html#the-component-lifecycle
   */
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  /**
   * Render the component.
   */
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <CodeTheChangeHeader />
        <Content>
          <CauseList />
        </Content>
      </Container>
    );
  }
}