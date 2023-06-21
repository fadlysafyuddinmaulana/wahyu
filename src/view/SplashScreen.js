import React, {Component} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#6E85B7" />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#B1E3F1',
          }}>
          <Text
            style={{
              color: '#FA2FB5',
              fontStyle: 'italic',
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: 20,

              fontSize: 30,
            }}>
            Selamat Datang di Task Planner
          </Text>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
