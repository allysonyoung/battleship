import React from 'react';
import ReactDOM from 'react-dom';

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#207291'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: 'black'
    })
  }
  render() {
    const styles = {
      'backgroundColor': this.state.color,
      'border': 'solid 1px #3cc3da',
      'height': this.props.height,
      'width': this.props.width
    }

    return (
      <button coord={this.props.id} style={styles} onClick={this.handleClick}></button>
    )
  }
}
