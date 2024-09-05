import React from 'react';
import { View } from 'react-native';

import styles from './Flag.style';

interface IFlag {
  bigger?: boolean,
}

const Flag = ({ bigger }: IFlag) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.flagpole, bigger && styles.flagpoleBigger]} />
      <View style={[styles.flag, bigger && styles.flagBigger]} />
      <View style={[styles.basePrimary, bigger && styles.basePrimaryBigger]} />
      <View style={[styles.baseSecundary, bigger && styles.baseSecundaryBigger]} />
    </View>
  );
};

export default Flag;
