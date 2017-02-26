import Settings from '../../Settings';

export default {
  grid_container: {
    flex: 4,
    backgroundColor: '#000000',
  },
  grid_list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  grid_row: {
    justifyContent: 'center',
    padding: 5,
    margin: 0,
    width: Settings.width/3,
    height: Settings.width/3,
    alignItems: 'center',
  },
  loader: {
    backgroundColor: '#141414',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};