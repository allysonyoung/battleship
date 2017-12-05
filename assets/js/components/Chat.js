import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList.js';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    // this.props.channel.on("new_msg", )
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const containerStyle = {
      'backgroundColor': '#eee',
      'height': '403px'
    }

    const titleStyle = {
      'backgroundColor': 'grey',
      'color': 'white',
      'textAlign': 'center'
    }
    const formWrapperStyles = {
      'display': 'flex',
      'height': '88%'
    }

    const formStyles = {
      'alignSelf': 'flex-end',
      'display': 'flex',
      'flexGrow': '1',
      'height': '80px',
      'justifyContent': 'flex-end'
    }

    const textStyle = {
      'width': '100%'
    }

    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>CHAT</h2>
        <div>

        </div>
        <div style={formWrapperStyles}>
          <form style={formStyles} onSubmit={this.handleSubmit}>
            <textarea style={textStyle} placeholder="Type a message..."/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
