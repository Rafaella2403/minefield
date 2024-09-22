import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';

import { params, createMinedBoard } from './utils/';
import {
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from './utils/generic/generic';
import { MineField } from './components';

interface AppState {
  board: any;
  won: boolean;
  lost: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor (props: any) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(columns * rows * params.difficultLevel);
};

  createState = () => {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard({ rows, columns, minesAmount: this.minesAmount() }),
      won: false,
      lost: false,
    };
  };

  onOpenField = (r: number, c: number) => {
    const board = cloneBoard(this.state.board);
    openField(board, r, c);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeeeeu!', 'Que burro!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!');
    }

    this.setState({ board, lost, won });
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={() => console.log('selecionou o field')} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: '#AAA',
  },
  board: {
    alignItems: 'center',
  },
});
