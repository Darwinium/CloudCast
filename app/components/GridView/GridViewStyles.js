import Settings from '../../Settings';

export default {
  grid_container: {
    flex: 4,
    backgroundColor: '#2B3A42',
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
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC'
  },
};