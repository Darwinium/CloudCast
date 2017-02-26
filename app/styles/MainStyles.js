import Settings from '../Settings';

export default {
  main_container: {
    flex: 1,
    flexDirection: 'column',
  },
  player: {
    position: 'absolute', 
    top: (Settings.height - 100), 
    left: 0, 
    width: Settings.width, 
    height: 100
  }
};