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
    let image = 'https://placehold.it/100x100/000000/ffffff?text=' + this.props.text

    // let image = 'https://i1.sndcdn.com/artworks-000179680581-4imitm-t500x500.jpg'

    return (
      
        <Image style={GridViewStyles.grid_row}
          source={{uri: image}}
        />
      
    );
  }
}

export default Item;