import React from 'react';
import { View } from 'react-native';

import { Field } from '../';
import styles from './MineField.style';

interface IMineField {
  board: any[][];
  onOpenField: (r: number, c: number) => void;
  onSelectField: (r: number, c: number) => void;
}

const MineField = (props: IMineField) => {
  const renderRows = () => props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} onSelect={() => props.onSelectField(r, c)} />;
    });
    return <View key={r}>{columns}</View>;
  });
  return <View style={styles.container} >{renderRows()}</View>;
};

export default MineField;
