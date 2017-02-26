import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

import Api from '../../Api';
import GridViewStyles from './GridViewStyles';

class Item extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      track: this.props.track,
      isPlaying: false,
    }
  }

  onPressImage(track){
    let stream_url = track.stream_url + `?client_id=${Api.client_id}`;
    console.log(track.title + '\n' + stream_url);

    if(!this.state.isPlaying) {
      fetch(stream_url)
      .then(response => {
        console.log(response.url);
        ReactNativeAudioStreaming.play(response.url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
        this.setState({isPlaying: true});
      })
      .catch(error => console.log(error))
    } else {
      ReactNativeAudioStreaming.pause();
      this.setState({isPlaying: false});
    }
  }
  
  render() {
    let image_url;
    // let image = 'https://placehold.it/100x100/000000/ffffff?text=' + this.state.track;

    if(this.state.track.artwork_url) {
      image_url = this.state.track.artwork_url.replace('large', 't500x500');
    } else {
      image_url = 'https://placehold.it/500x500/000000/F2385A?text=' + this.state.track.title;
    }

    return (
      <TouchableOpacity onPress={() => this.onPressImage(this.props.track)} >
        <Image style={GridViewStyles.grid_row}
          source={{uri: image_url}}
        />
      </TouchableOpacity>
      
    );
  }
}

export default Item;