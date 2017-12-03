import React from 'react';
import ReactDOM from 'react-dom';

const Cell = (props) => {
  const styles = {
    'backgroundColor': props.color,
    'border': 'solid 1px black',
    'height': props.height,
    'width': props.width
  }

  return (
    <button coord={props.id} style={styles}></button>
  )
}

export default Cell;
