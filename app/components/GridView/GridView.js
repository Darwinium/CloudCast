import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import Item from './Item';

import GridViewStyles from './GridViewStyles';

class GridView extends React.Component {
  constructor(props) {
    super(props);
    
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.data = Array.apply(null, {length: 200}).map(Number.call, Number);
    this.state = {
        dataSource: this.ds.cloneWithRows(this.data),
        isLoading: true,
    }
  }
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={GridViewStyles.loader}>
          <Image source={require('../../images/loader.gif')} style={{width: 100, height: 100}} />
        </View>
      );
    }
    else {
      return (
        <View style={GridViewStyles.grid_container}>
          <ListView
            contentContainerStyle={GridViewStyles.grid_list}
            dataSource={this.state.dataSource}
            initialListSize={21}
            pageSize={2} // should be a multiple of the no. of visible cells per row
            scrollRenderAheadDistance={500}
            renderRow={(rowData) => <Item text={rowData} /> }
          />
        </View>
      );
    }
  }
}

export default GridView;