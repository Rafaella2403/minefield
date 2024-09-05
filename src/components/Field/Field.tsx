import React from 'react';
import { View, ViewStyle, Text } from 'react-native';

import { Mine, Flag } from '../';

import styles from './Field.style';

interface IField {
  mined?: boolean,
  opened?: boolean,
  nearMines?: number,
  exploded?: boolean;
  flagged?: boolean;
}

const Field = ({ mined, nearMines = 0, opened, exploded, flagged }: IField) => {
  const getSytles = () => {
    const styleField: ViewStyle[] = [styles.field];

    if (opened) {
      styleField.push(styles.opened);
    }
    if (styleField.length === 1) {
      styleField.push(styles.regular);
    }
    if (exploded) {
      styleField.push(styles.exploded);
    }
    if (flagged) {
      styleField.push(styles.regular);
    }
    return styleField;
  };

  const getTextColorField = () => {
    let color = '';

    if (nearMines > 0) {
      if (nearMines === 1) {
        color = '#2A23D7';
      }
      if (nearMines === 2) {
        color = '#2B520F';
      }
      if (nearMines < 2 && nearMines > 6) {
        color = '#F9060A';
      }
      if (nearMines >= 6) {
        color = '#F221A9';
      }
    }

    return color;
  };

  return (
    <View style={getSytles()}>
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, {color: getTextColorField()}]}>
          {nearMines}
        </Text>
      )}
      {mined && opened && <Mine />}
      {flagged && !opened && <Flag />}
    </View>
  );
};

export default Field;
