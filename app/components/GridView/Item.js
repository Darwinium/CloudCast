import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import GridViewStyles from './GridViewStyles';

class Item extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    console.log(this.props.track);
    console.log(this.props.track.artwork_url);

    let image_url;

    // let image = 'https://placehold.it/100x100/000000/ffffff?text=' + this.props.track;

    if(this.props.track.artwork_url) {
      image_url = this.props.track.artwork_url.replace('large', 't500x500');
    } else {
      image_url = 'https://placehold.it/500x500/000000/F2385A?text=' + this.props.track.title;
    }

    return (
      
        <Image style={GridViewStyles.grid_row}
          source={{uri: image_url}}
        />
      
    );
  }
}

export default Item;