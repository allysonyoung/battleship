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
      'flexDirection': 'row'
    }

    const textStyle = {
      'marginLeft': '20px'
    }
    return(
      <div style={styles}>
        <div className="game-board">
          <h1 style={textStyle}>Opponent</h1>
          <Grid />
        </div>
        <div className="game-board">
          <h1 style={textStyle}>You</h1>
          <Grid />
        </div>
      </div>
    )
  }
}
