import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Chat</h2>
        <MessageList />
      </div>
    )
  }
}
