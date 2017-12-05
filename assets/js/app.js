import "phoenix_html"
import socket from "./socket"
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat.js'
import Game from './components/Game';
import Form from './components/Form.js';

function ready(chat, game) {
  let game_code = 'GAMECODE';
  let channel = socket.channel("game:" + game_code, {});
  channel.join()
    .receive("ok", state0 => {
      console.log("Joined successfully", state0);
      ReactDOM.render(<Game channel={channel} state={state0}/>, game);
      ReactDOM.render(<Chat channel={channel} state={state0}/>, chat);
    })
    .receive("error", resp => {
      console.log("Unable to join", resp);
    })
}

function start() {
  let chat = document.getElementById('chat');
  let game = document.getElementById('game');
  let startButton = document.getElementById('start-button');
  const styles = {
    'fontSize': '20px',
    'marginTop': '15px',
    'width': '100%'
  }
  let html = <button className="btn btn-primary" style={styles} onClick={ready(chat, game)}>Start</button>;
  console.log(window.user_name)
  ReactDOM.render(html, startButton);
}

$(start);
