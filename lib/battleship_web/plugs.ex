defmodule BattleshipWeb.Plugs do
  import Plug.Conn

  def fetch_user(conn, _opts) do
    user = get_session(conn, :user_name)
    if user do
      conn
      |> assign(:user_name, user)
    else
      conn
      |> assign(:user_name, nil)
    end
  end

  def fetch_table(conn, _opts) do
    table = get_session(conn, :table)
    if table do
      conn
      |> assign(:table_name, table)
    else
      conn
      |> assign(:table_name, nil)
    end
  end
end
