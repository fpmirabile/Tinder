/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Home from './home/home';
import Messages from './messages';
import Profile from './profile';

import {setNavigator} from '../actions'

class _Index extends Component {
  constructor(props){
    super(props)
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      const HomePage = connect(Home.mapStateToProps, Home.mapDispatchToProps)(Home);
      return <HomePage navigator={navigator}/>
    }
    if (routeId === 'messages') {
      const MessagesPage = connect(Messages.mapStateToProps, Messages.mapDispatchToProps)(Messages);
      return <MessagesPage navigator={navigator}/>

    }
    if (routeId === 'profile') {
      const ProfilePage = connect(Profile.mapStateToProps, Profile.mapDispatchToProps)(Profile);
      return <ProfilePage navigator={navigator}/>
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Navigator
          style={{flex: 1}}
          ref={'NAV'}
          initialRoute={{id: 'home', name: 'home'}}
          renderScene={this.renderScene.bind(this)}/>
      </View>
    )
}
}

const mapDispatchToProps = function(dispatch) {
  return {
    setNavigator: function(nav) {
      dispatch(setNavigator(nav))
    }
  }
}

const Index = connect(null, mapDispatchToProps)(_Index);

export default Index;
