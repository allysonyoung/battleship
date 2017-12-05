import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';

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
      'backgroundColor': '#eee'
    }

    const titleStyle = {
      'backgroundColor': 'grey',
      'color': 'white',
      'textAlign': 'center'
    }
    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>CHAT</h2>
        <div>

        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea placeholder="Type a message..."/>
          </form>
          <input type="submit" value="Submit" />
        </div>
      </div>
    )
  }
}
