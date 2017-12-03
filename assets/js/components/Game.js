import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';

export default class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-around'
    }
    return(
      <div style={styles}>
        <div className="game-board">
          <h1>Opponent</h1>
          <Grid />
        </div>
        <div className="game-board">
          <h1>You</h1>
          <Grid />
        </div>
      </div>
    )
  }
}
