import React from 'react';
import { View } from 'react-native';

import styles from './Flag.style';

const Flag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flagpole} />
      <View style={styles.flag} />
      <View style={styles.basePrimary} />
      <View style={styles.baseSecundary} />
    </View>
  );
};

export default Flag;
