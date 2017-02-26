import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import WaveForm from 'react-native-audiowaveform';

import PlayerStyles from './PlayerStyles';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playAudio: false,
    }
  }

  playMedia() {
    if (this.state.playAudio) {
      this.setState({
        playAudio: false,
      })
    } else {
      this.setState({
        playAudio: true,
      })
    }
  }
  
  render() {
    return (
      

      <Image 
        style={PlayerStyles.bg}
        source={{uri: 'https://w1.sndcdn.com/SQPgL9hEpiSy_m.png'}}
      />
    );
    // return (
    //   <Image 
    //     style={PlayerStyles.bg}
    //     source={require('./images/player_bg.png')} >
    //     <WaveForm style={PlayerStyles.player_container}  
    //       onPress = {(sender) => this.playMedia() }
    //       source={{uri:'https://github.com/juananime/react-native-audiowaveform/raw/master/Example/audio/intro.mp3'}}
    //       waveFormStyle={{
    //         waveColor: 'white', 
    //         scrubColor: '#F2385A',
    //         leftWaveColor:'lightsalmon', 
    //         rightWaveColor:'lightsalmon'
    //       }}
    //       play={this.state.playAudio? true:false}
    //     />
    //   </Image>
    // );
  }
}

export default Player;