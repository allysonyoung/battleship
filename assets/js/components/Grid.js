import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell';

export default class Grid extends React.Component {
  square() {
    return (
      <Cell width='50px' height='50px' color='grey' />
    );
  }

  render() {
    const styles = {
      'margin': '20px'
    }

    var grid = [];
    var gridRows = [];
    for (var x = 0; x < 10; x++) {
      var gridCells = [];
      let rowKey = `${x}`;
      for (var y = 0; y < 10; y++) {
        let key = `${x}, ${y}`;
        gridCells.push(<Cell key={key} id={key} width='40px' height='40px' color='grey' />);
      }
      gridRows.push(<div className="grid-rows" key={rowKey}>{gridCells}</div>);
    }

    return (
      <div className="board" style={styles}>
        <div>
          {gridRows}
        </div>
      </div>
    )
  }
}
