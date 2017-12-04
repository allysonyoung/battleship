defmodule BattleshipWeb.GameChannel do
  use BattleshipWeb, :channel
  alias Battleship.GameAgent
  alias Battleship.Game
  alias Battleship.Chat

  def join("game:" <> table_name, payload, socket) do
    if authorized?(socket, table_name) do
      game = GameAgent.get(table_name) || Game.new()
      GameAgent.put(table_name, game)
      socket = socket
      |> assign(:table_name, game)
      {:ok, game, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("new_msg", %{"message" => message}, socket) do
    chat = Chat.new_message(message, socket.assigns[:user], Agent.get(socket.assigns[:table_name]))
    broadcast socket, "state", chat
    {:reply, {:ok, chat}, socket}
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
