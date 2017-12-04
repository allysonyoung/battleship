// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat'
import Game from './components/Game';
import Form from './components/Form.js';
window.user_name = "allyson";
window.table_name = "game";
// ReactDOM.render(<Game />, document.getElementById('game'));
// ReactDOM.render(<Chat />, document.getElementById('chat'));

// if (!(window.user_name && window.table_name)) {
//   ReactDOM.render(<Form />, document.getElementById('form'));
// }

function ready(channel, state) {
  let chat = document.getElementById('chat');
  let game = document.getElementById('game');
  ReactDOM.render(<Game state={state} channel={channel} />, game);
  ReactDOM.render(<Chat state={state} channel={channel} />, chat);
}

function start() {
  if (window.table_name) {
    let channel = socket.channel("game:" + window.table_name, {});
    console.log(channel)
    channel.join()
      .receive("ok", state0 => {
        console.log("Joined successfully", state0);
        ready(channel, state0);
      })
      .receive("error", resp => { console.log("Unable to join", resp);
    });
  }
}

$(start);
