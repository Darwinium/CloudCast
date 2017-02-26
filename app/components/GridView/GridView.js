import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import {constructUserFavoritesUrl, constructUserSongsUrl} from '../../lib/soundcloud/Soundcloud';

import Item from './Item';
import GridViewStyles from './GridViewStyles';

class GridView extends React.Component {
  constructor(props) {
    super(props);
    
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: null,
        images: null,
        isLoading: true,
        nextURL: null
    }
  }

  componentDidMount() {
    this.getchFavorites(constructUserFavoritesUrl('lestam'))
  }
  

  getchFavorites(request) {
    console.log(request);

    let images = this.state.images;

    fetch(request)
      .then(response => response.json())
      .then(json => {
        if (this.state.images != null) {
          for(let i=0; i < json.collection.length; i++) {
            images.push(json.collection[i]);
          }
          console.log('Next Page');
          this.setState({
            dataSource: this.ds.cloneWithRows(images), 
            images: images,
          });
        } else {
          this.setState({
            dataSource: this.ds.cloneWithRows(json.collection), 
            images: json.collection,
          });
        }
        this.setState({
          isLoading: false, 
          nextURL: json.next_href
        });
      })
      .catch(error => console.log(error))
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <Item track={rowData} />
    );
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
            initialListSize={36}
            pageSize={2} // should be a multiple of the no. of visible cells per row
            scrollRenderAheadDistance={500}
            onEndReachedThreshold={500}
            onEndReached={() => { this.getchFavorites(this.state.nextURL) }}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      );
    }
  }
}

export default GridView;