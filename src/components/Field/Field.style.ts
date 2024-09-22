import { StyleSheet } from 'react-native';

import { params } from '../../utils';

export default StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999999',
    borderLeftColor: '#CCCCCC',
    borderTopColor: '#CCCCCC',
    borderRightColor: '#333333',
    borderBottomColor: '#333333',
  },
  opened: {
    backgroundColor: '#999999',
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});
