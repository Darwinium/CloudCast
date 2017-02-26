import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainStyles from '../styles/MainStyles';

import GridView from '../components/GridView/GridView';
import Player from '../components/Player/Player';

class CastsList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={MainStyles.main_container}>
        <GridView />
        <View style={MainStyles.player} >
          <Player />
        </View>
      </View>
    );
  }
}

export default CastsList;