defmodule BattleshipWeb.GameChannel do
  use BattleshipWeb, :channel
  alias Battleship.GameAgent
  alias Battleship.Game

  def join("game:" <> code, payload, socket) do
    if authorized?(socket, code) do
      game = GameAgent.get(code) || Game.new()
      GameAgent.put(code, game)
      socket = socket
      |> assign(:game_code, code)
      {:ok, Game.client_view(game), socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("new_msg", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (game:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(socket, code) do
    true
  end
end
